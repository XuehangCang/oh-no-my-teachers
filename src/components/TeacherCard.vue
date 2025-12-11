<script setup lang="ts">
import type { Teacher } from '../types/game';

defineProps<{
  teacher: Teacher;
}>();

defineEmits<{
  (e: 'select', id: string): void;
}>();
</script>

<template>
  <div class="card w-80 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer" @click="$emit('select', teacher.id)">
    <figure class="h-64 overflow-hidden">
      <img :src="teacher.avatar" :alt="teacher.name" class="object-cover w-full h-full" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ teacher.name }}
        <div class="badge badge-secondary">{{ teacher.subject }}</div>
      </h2>
      <p class="text-sm text-gray-500">{{ teacher.description }}</p>
      <div class="card-actions justify-end mt-2">
        <div v-for="tag in teacher.tags" :key="tag" class="badge badge-outline">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>
