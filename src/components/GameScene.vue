<script setup lang="ts">
import { computed } from 'vue';
import { useGameStore } from '../stores/game';
import DialogueBox from './DialogueBox.vue';
import type { Choice } from '../types/game';
import { useRouter } from 'vue-router';
import bgClassroom from '../assets/images/bg_classroom.png';

const store = useGameStore();
const router = useRouter();

const teacher = computed(() => store.currentTeacher);
const node = computed(() => store.currentScriptNode);
const affinity = computed(() => {
  if (!teacher.value) return 0;
  return store.state.affinity[teacher.value.id] || 0;
});

function handleNext(nextId: string) {
  if (nextId === '') {
    // End of script
    router.push('/select');
    return;
  }
  store.nextNode(nextId);
}

function handleChoice(choice: Choice) {
  if (choice.isCorrect) {
    store.updateAffinity(teacher.value!.id, 10);
    // Play success sound (TODO)
  } else {
    store.updateAffinity(teacher.value!.id, -5);
    // Play fail sound (TODO)
  }
  
  if (choice.nextNodeId) {
    store.nextNode(choice.nextNodeId);
  }
}

function goBack() {
  // Confirm dialog could be added here
  router.push('/select');
}
</script>

<template>
  <div class="relative w-full h-full bg-base-200 overflow-hidden font-sans">
    <!-- Background (Classroom) with Ken Burns effect -->
    <div 
      class="absolute inset-0 bg-cover bg-center animate-ken-burns" 
      :style="{ backgroundImage: `url(${bgClassroom})` }"
    ></div>
    
    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-white/40 backdrop-blur-sm pointer-events-none"></div>

    <!-- HUD: Top Bar -->
    <div class="absolute top-16 left-0 w-full p-4 flex justify-between items-start z-20">
      <!-- Back Button -->
      <button class="btn btn-circle btn-ghost bg-black/5 hover:bg-black/10 text-black border-none" @click="goBack">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>

      <!-- Teacher Info & Affinity -->
      <div v-if="teacher" class="flex flex-col items-end">
        <div class="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-200">
          <div class="avatar">
            <div class="w-8 h-8 rounded-full ring ring-gray-200 ring-offset-base-100 ring-offset-1">
              <img :src="teacher.avatar" />
            </div>
          </div>
          <div class="flex flex-col">
            <span class="text-gray-900 font-bold text-sm leading-none">{{ teacher.name }}</span>
            <span class="text-gray-500 text-xs leading-none mt-1">{{ teacher.subject }}</span>
          </div>
          <div class="w-px h-6 bg-gray-200 mx-1"></div>
          <div class="flex items-center gap-1 text-red-500 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-900">{{ affinity }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Split -->
    <div class="absolute inset-0 flex z-10">
      <!-- Left: Teacher (Reduced width) -->
      <div class="w-1/3 h-full flex items-end justify-center relative">
        <div v-if="teacher" class="h-[75%] transition-all duration-500">
          <img 
            :src="teacher.avatar" 
            :alt="teacher.name" 
            class="h-full object-contain drop-shadow-2xl animate__animated animate__fadeInUp animate-breathe"
          />
        </div>
      </div>

      <!-- Right: Dialogue (Expanded width) -->
      <div class="w-2/3 h-full flex flex-col justify-center items-center p-12 bg-white/80 backdrop-blur-xl border-l border-white/20 shadow-2xl">
        <DialogueBox 
          v-if="node" 
          :node="node" 
          @next="handleNext"
          @choice="handleChoice"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}
.animate-breathe {
  animation: breathe 6s ease-in-out infinite;
}

@keyframes ken-burns {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}
.animate-ken-burns {
  animation: ken-burns 20s ease-out infinite alternate;
}
</style>
