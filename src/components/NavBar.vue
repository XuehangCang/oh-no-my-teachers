<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function startGame() {
  router.push('/select');
}
</script>

<template>
  <div class="navbar bg-base-100 fixed top-0 z-50 border-b border-base-300 h-16">
    <div class="container mx-auto px-4 flex justify-between">
      <div class="navbar-start w-auto">
        <div class="dropdown lg:hidden">
          <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 border border-base-300">
            <li><router-link to="/#features">课程特色</router-link></li>
            <li><router-link to="/#teachers">师资力量</router-link></li>
            <li><router-link to="/#about">关于我们</router-link></li>
          </ul>
        </div>
        <router-link to="/" class="text-xl font-bold tracking-tight flex items-center gap-2 ml-2 lg:ml-0">
          <span class="text-2xl">🎓</span> OH NO! Teachers
        </router-link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 font-medium text-sm gap-6">
          <li><router-link to="/#features" class="hover:text-primary transition-colors">课程特色</router-link></li>
          <li><router-link to="/#teachers" class="hover:text-primary transition-colors">师资力量</router-link></li>
          <li><router-link to="/#about" class="hover:text-primary transition-colors">关于我们</router-link></li>
        </ul>
      </div>
      <div class="navbar-end w-auto">
        <a class="btn btn-primary btn-sm px-6" @click="startGame">立即入学</a>
      </div>
    </div>
  </div>
</template>
