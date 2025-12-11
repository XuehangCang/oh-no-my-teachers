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
  <div class="card w-80 bg-base-100 border border-base-300 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer rounded-lg overflow-hidden group" @click="$emit('select', teacher.id)">
    <figure class="h-64 overflow-hidden bg-gray-100">
      <img :src="teacher.avatar" :alt="teacher.name" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
    </figure>
    <div class="p-6">
      <div class="flex justify-between items-start mb-2">
        <h2 class="text-xl font-bold">
          {{ teacher.name }}
        </h2>
        <div class="badge badge-neutral badge-sm">{{ teacher.subject }}</div>
      </div>
      <p class="text-sm text-gray-600 mb-4 line-clamp-2">{{ teacher.description }}</p>
      <div class="flex flex-wrap gap-2">
        <div v-for="tag in teacher.tags" :key="tag" class="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>
