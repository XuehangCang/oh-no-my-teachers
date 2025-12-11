<script setup lang="ts">
import { computed } from 'vue';
import { useGameStore } from '../stores/game';
import DialogueBox from './DialogueBox.vue';
import type { Choice } from '../types/game';
import { useRouter } from 'vue-router';

const store = useGameStore();
const router = useRouter();

const teacher = computed(() => store.currentTeacher);
const node = computed(() => store.currentScriptNode);

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
</script>

<template>
  <div class="relative w-full h-full bg-base-200 overflow-hidden">
    <!-- Background (Classroom) -->
    <div class="absolute inset-0 bg-[url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Classroom+Background')] bg-cover bg-center"></div>

    <!-- Teacher Avatar -->
    <div v-if="teacher" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[80%] transition-all duration-500">
      <img 
        :src="teacher.avatar" 
        :alt="teacher.name" 
        class="h-full object-contain drop-shadow-2xl animate__animated animate__fadeInUp"
      />
    </div>

    <!-- Dialogue Interface -->
    <DialogueBox 
      v-if="node" 
      :node="node" 
      @next="handleNext"
      @choice="handleChoice"
    />
  </div>
</template>
