<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function startGame() {
  router.push('/select');
}
</script>

<template>
  <div class="hero min-h-screen bg-base-200 relative overflow-hidden">
    <!-- Background Animation (Optional) -->
    <div class="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 animate-pulse"></div>

    <div class="hero-content text-center z-10">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold mb-8 animate__animated animate__bounceIn">
          完蛋！<br/>我被老师包围了！
        </h1>
        <p class="py-6 text-xl animate__animated animate__fadeIn animate__delay-1s">
          沉浸式 AI 教学体验<br/>
          攻略老师，掌握知识
        </p>
        <button class="btn btn-primary btn-lg animate__animated animate__pulse animate__infinite" @click="startGame">
          入学报到
        </button>
      </div>
    </div>
  </div>
</template>

