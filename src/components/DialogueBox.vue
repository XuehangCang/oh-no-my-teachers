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
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-30" @click="handleClick">
    
    <!-- Choices (Floating above dialogue) -->
    <div v-if="showChoices" class="flex flex-col items-center gap-3 mb-6 w-full animate__animated animate__fadeInUp">
      <button 
        v-for="choice in node.choices" 
        :key="choice.id"
        class="btn btn-lg w-full max-w-2xl bg-base-100/80 backdrop-blur-md border-primary/30 hover:bg-primary hover:border-primary hover:text-primary-content transition-all duration-300 shadow-lg group relative overflow-hidden"
        @click.stop="emit('choice', choice)"
      >
        <div class="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
        <span class="mr-2 opacity-70">➤</span> {{ choice.text }}
      </button>
    </div>

    <!-- Dialogue Box Container -->
    <div class="relative bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.3)] overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300">
      
      <!-- Tech Background Grid -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none"></div>
      
      <!-- Glowing Corner Accents -->
      <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/50 rounded-tl-3xl opacity-50"></div>
      <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/50 rounded-br-3xl opacity-50"></div>

      <!-- Header: Speaker & Status -->
      <div class="flex items-center gap-3 mb-3 relative z-10">
        <div v-if="node.speaker" class="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary font-bold text-sm tracking-wider uppercase flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          {{ node.speaker }}
        </div>
        <div class="h-px grow bg-linear-to-r from-white/10 to-transparent"></div>
      </div>

      <!-- Text Content -->
      <p class="text-lg md:text-xl leading-relaxed font-light text-white/90 relative z-10 min-h-12">
        {{ displayedText }}
        <span v-if="isTyping" class="inline-block w-2 h-5 bg-primary ml-1 animate-pulse align-middle shadow-[0_0_10px_rgba(var(--p),0.8)]"></span>
      </p>

      <!-- Continue Indicator -->
      <div v-if="!isTyping && !node.choices && node.next" class="absolute bottom-4 right-6 animate-bounce text-primary/80 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-70">
        Click to Continue <span class="text-lg">▼</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes shimmer {
  100% { transform: translateX(100%); }
}
.group-hover\:animate-shimmer:hover {
  animation: shimmer 1.5s infinite;
}
</style>
