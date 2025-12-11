<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import type { ScriptNode, Choice } from '../types/game';

const props = defineProps<{
  node: ScriptNode;
}>();

const emit = defineEmits<{
  (e: 'next', nextId: string): void;
  (e: 'choice', choice: Choice): void;
}>();

const displayedText = ref('');
const isTyping = ref(false);
const showChoices = ref(false);
let typingInterval: number | null = null;

function typeText() {
  if (typingInterval) clearInterval(typingInterval);
  
  displayedText.value = '';
  isTyping.value = true;
  showChoices.value = false;
  
  let i = 0;
  const text = props.node.text;
  const speed = 30; // ms per char

  typingInterval = setInterval(() => {
    if (i < text.length) {
      displayedText.value += text.charAt(i);
      i++;
    } else {
      if (typingInterval) clearInterval(typingInterval);
      isTyping.value = false;
      if (props.node.choices && props.node.choices.length > 0) {
        showChoices.value = true;
      }
    }
  }, speed);
}

watch(() => props.node, () => {
  typeText();
}, { immediate: true });

function handleClick() {
  if (isTyping.value) {
    // Skip typing: show full text immediately
    if (typingInterval) clearInterval(typingInterval);
    displayedText.value = props.node.text;
    isTyping.value = false;
    if (props.node.choices && props.node.choices.length > 0) {
      showChoices.value = true;
    }
  } else {
    if (!props.node.choices && props.node.next) {
      emit('next', props.node.next);
    }
  }
}
</script>

<template>
  <div class="absolute bottom-0 left-0 w-full p-4 pb-8 z-30" @click="handleClick">
    <!-- Speaker Name Tag -->
    <div v-if="node.speaker" class="mb-0 ml-8 relative z-10 inline-block">
      <div class="px-8 py-2 bg-primary/90 backdrop-blur-md text-primary-content rounded-t-2xl font-bold text-xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-x border-white/20 transform translate-y-1">
        {{ node.speaker }}
      </div>
    </div>

    <!-- Dialogue Box Container -->
    <div class="bg-base-100/85 backdrop-blur-xl border border-white/30 rounded-3xl p-8 min-h-[180px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative mx-4 overflow-hidden group cursor-pointer hover:bg-base-100/90 transition-colors duration-300">
      
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 p-4 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
      </div>

      <!-- Text Content -->
      <p class="text-xl leading-relaxed font-medium text-base-content/90 relative z-10">
        {{ displayedText }}
        <span v-if="isTyping" class="inline-block w-2 h-5 bg-primary ml-1 animate-pulse align-middle"></span>
      </p>

      <!-- Choices Overlay -->
      <div v-if="showChoices" class="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-4 z-20 animate__animated animate__fadeIn">
        <button 
          v-for="choice in node.choices" 
          :key="choice.id"
          class="btn btn-lg btn-wide glass text-white hover:scale-105 hover:text-primary-content transition-all duration-300 border-white/30 shadow-lg group-hover:shadow-primary/50"
          @click.stop="emit('choice', choice)"
        >
          <span class="mr-2 opacity-70">➤</span> {{ choice.text }}
        </button>
      </div>

      <!-- Continue Indicator -->
      <div v-if="!isTyping && !node.choices && node.next" class="absolute bottom-4 right-6 animate-bounce text-primary/80 flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
        Click to Continue <span class="text-xl">▼</span>
      </div>
    </div>
  </div>
</template>
