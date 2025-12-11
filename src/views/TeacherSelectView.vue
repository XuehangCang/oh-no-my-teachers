<script setup lang="ts">
import { teachers } from '../data/teachers';
import TeacherCard from '../components/TeacherCard.vue';
import { useGameStore } from '../stores/game';
import { useRouter } from 'vue-router';

const store = useGameStore();
const router = useRouter();

function handleSelect(id: string) {
  store.selectTeacher(id);
  router.push('/classroom');
}
</script>

<template>
  <div class="min-h-screen bg-base-200 p-8 flex flex-col items-center">
    <h1 class="text-4xl font-bold mb-8 text-primary animate__animated animate__fadeInDown">选择你的导师</h1>
    
    <div class="flex flex-wrap justify-center gap-8 animate__animated animate__fadeInUp">
      <TeacherCard 
        v-for="teacher in teachers" 
        :key="teacher.id" 
        :teacher="teacher" 
        @select="handleSelect"
      />
    </div>
  </div>
</template>
