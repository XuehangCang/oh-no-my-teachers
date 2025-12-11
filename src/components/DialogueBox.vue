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

function typeText() {
  displayedText.value = '';
  isTyping.value = true;
  showChoices.value = false;
  
  let i = 0;
  const text = props.node.text;
  const speed = 30; // ms per char

  const interval = setInterval(() => {
    if (i < text.length) {
      displayedText.value += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
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
    // Skip typing
    // displayedText.value = props.node.text;
    // isTyping.value = false;
    // if (props.node.choices) showChoices.value = true;
    // Actually, let's just let it finish or maybe speed up. For now, do nothing or simple skip.
  } else {
    if (!props.node.choices && props.node.next) {
      emit('next', props.node.next);
    }
  }
}
</script>

<template>
  <div class="absolute bottom-0 left-0 w-full p-4 pb-8 bg-linear-to-t from-black/80 to-transparent" @click="handleClick">
    <!-- Speaker Name -->
    <div v-if="node.speaker" class="mb-2 ml-4">
      <span class="px-4 py-1 bg-primary text-primary-content rounded-t-lg font-bold text-lg shadow-lg">
        {{ node.speaker }}
      </span>
    </div>

    <!-- Dialogue Box -->
    <div class="bg-base-100/90 backdrop-blur-md border border-white/20 rounded-xl p-6 min-h-[150px] shadow-2xl relative mx-4">
      <p class="text-lg leading-relaxed font-medium text-base-content">
        {{ displayedText }}
        <span v-if="isTyping" class="animate-pulse">|</span>
      </p>

      <!-- Choices -->
      <div v-if="showChoices" class="absolute -top-2.5 left-0 w-full flex flex-col items-center gap-2 transform -translate-y-full pb-4">
        <button 
          v-for="choice in node.choices" 
          :key="choice.id"
          class="btn btn-wide btn-primary glass animate__animated animate__fadeInUp"
          @click.stop="emit('choice', choice)"
        >
          {{ choice.text }}
        </button>
      </div>

      <!-- Continue Indicator -->
      <div v-if="!isTyping && !node.choices && node.next" class="absolute bottom-4 right-4 animate-bounce text-primary">
        ▼ 点击继续
      </div>
    </div>
  </div>
</template>
