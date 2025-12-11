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
  <div class="w-full max-w-3xl mx-auto flex flex-col justify-center h-full" @click="handleClick">
    
    <!-- Dialogue Box Container -->
    <div class="relative w-full cursor-pointer transition-all duration-300 mb-8">
      
      <!-- Header: Speaker -->
      <div v-if="node.speaker" class="mb-4 flex items-center gap-3">
        <div class="w-8 h-8 rounded-sm bg-green-500 flex items-center justify-center text-white font-bold text-xs">
          AI
        </div>
        <span class="font-bold text-sm text-gray-900">{{ node.speaker }}</span>
      </div>

      <!-- Text Content -->
      <p class="text-lg leading-relaxed text-gray-800 min-h-12 whitespace-pre-wrap">
        {{ displayedText }}<span v-if="isTyping" class="inline-block w-2 h-5 ml-1 bg-black animate-pulse align-middle"></span>
      </p>
      
      <!-- Continue Indicator -->
      <div v-if="!isTyping && !showChoices" class="mt-4 text-gray-400 text-sm flex items-center gap-2 animate-pulse">
        <span>Click to continue</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    <!-- Choices (Answers) -->
    <div v-if="showChoices" class="flex flex-col items-center gap-3 w-full animate__animated animate__fadeInUp">
      <button 
        v-for="choice in node.choices" 
        :key="choice.id"
        class="btn w-full max-w-xl bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-black font-normal shadow-sm transition-all duration-200 rounded-2xl h-auto py-3 min-h-12"
        @click.stop="emit('choice', choice)"
      >
        {{ choice.text }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Minimal styles */
</style>
