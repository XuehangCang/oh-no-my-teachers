<script setup lang="ts">
import { useRouter } from 'vue-router';
import { teachers } from '../data/teachers';
import TeacherCard from '../components/TeacherCard.vue';
import heroImage from '@/assets/images/hero.png';

const router = useRouter();

function startGame() {
  router.push('/select');
}

function handleSelect(id: string) {
  // In HomeView, clicking a teacher card also starts the game/selection flow
  router.push('/select');
}

function scrollToFeatures() {
  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <div class="min-h-screen bg-base-100 font-sans text-base-content">
    <!-- Navbar -->
    <div class="navbar bg-base-100 fixed top-0 z-50 border-b border-base-300 h-16">
      <div class="container mx-auto px-4 flex justify-between">
        <div class="navbar-start w-auto">
          <div class="dropdown lg:hidden">
            <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 border border-base-300">
              <li><a href="#features">课程特色</a></li>
              <li><a href="#teachers">师资力量</a></li>
              <li><a href="#about">关于我们</a></li>
            </ul>
          </div>
          <a class="text-xl font-bold tracking-tight flex items-center gap-2 ml-2 lg:ml-0" href="#">
            <span class="text-2xl">🎓</span> OH NO! Teachers
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 font-medium text-sm gap-6">
            <li><a href="#features" class="hover:text-primary transition-colors">课程特色</a></li>
            <li><a href="#teachers" class="hover:text-primary transition-colors">师资力量</a></li>
            <li><a href="#about" class="hover:text-primary transition-colors">关于我们</a></li>
          </ul>
        </div>
        <div class="navbar-end w-auto">
          <a class="btn btn-primary btn-sm px-6" @click="startGame">立即入学</a>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="hero min-h-screen bg-base-100 pt-20">
      <div class="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div class="flex-1 text-center lg:text-left animate__animated animate__fadeInUp">
          <h1 class="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6">
            完蛋！<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600">我被老师包围了！</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            国内首款沉浸式 AI 互动教学平台。告别枯燥网课，与性格迥异的 AI 导师建立羁绊，在“恋爱”般的体验中掌握硬核知识。
          </p>
          <div class="flex gap-4 justify-center lg:justify-start">
            <button class="btn btn-primary btn-lg px-8" @click="startGame">
              开始上课
            </button>
            <button class="btn btn-outline btn-lg px-8" @click="scrollToFeatures">
              了解更多
            </button>
          </div>
        </div>
        <div class="flex-1 w-full max-w-xl animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
           <img :src="heroImage" alt="AI Education" class="w-full h-auto rounded-lg shadow-2xl grayscale-0 hover:grayscale transition-all duration-500" />
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div id="features" class="py-24 bg-base-200 border-t border-base-300">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16 tracking-tight">为什么选择我们？</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-8 bg-base-100 rounded-xl border border-base-300 hover:border-primary transition-colors duration-300">
            <div class="text-4xl mb-6">🤖</div>
            <h3 class="text-xl font-bold mb-3">AI 驱动教学</h3>
            <p class="text-gray-600 leading-relaxed">基于大语言模型，每位老师都有独特的性格和教学风格。拒绝照本宣科，因材施教。</p>
          </div>
          <div class="p-8 bg-base-100 rounded-xl border border-base-300 hover:border-primary transition-colors duration-300">
            <div class="text-4xl mb-6">❤️</div>
            <h3 class="text-xl font-bold mb-3">情感羁绊系统</h3>
            <p class="text-gray-600 leading-relaxed">通过回答问题和互动提升好感度。解锁隐藏剧情、专属语音和彩蛋奖励。</p>
          </div>
          <div class="p-8 bg-base-100 rounded-xl border border-base-300 hover:border-primary transition-colors duration-300">
            <div class="text-4xl mb-6">📚</div>
            <h3 class="text-xl font-bold mb-3">硬核知识体系</h3>
            <p class="text-gray-600 leading-relaxed">覆盖机器学习、Python 编程、学术英语等实用学科。玩游戏也能学到真本事。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Teachers Section -->
    <div id="teachers" class="py-24 bg-base-100 border-t border-base-300">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4 tracking-tight">金牌讲师团</h2>
        <p class="text-center text-lg mb-16 text-gray-500">选择你心仪的导师，开启专属学习路线</p>
        
        <div class="flex flex-wrap justify-center gap-8">
          <TeacherCard 
            v-for="teacher in teachers" 
            :key="teacher.id" 
            :teacher="teacher" 
            @select="handleSelect"
          />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="py-12 bg-base-100 border-t border-base-300">
      <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <p class="font-bold text-xl mb-2">
            🎓 OH NO! Teachers
          </p> 
          <p class="text-sm text-gray-500">Copyright © 2025 XuehangCang. All rights reserved.</p>
        </div>
        <div class="flex gap-6 text-sm font-medium text-gray-600">
          <a class="hover:text-primary transition-colors cursor-pointer">关于比赛</a>
          <a class="hover:text-primary transition-colors cursor-pointer">GitHub 仓库</a>
          <a class="hover:text-primary transition-colors cursor-pointer">联系我们</a>
        </div>
      </div>
    </footer>
  </div>
</template>


