<script setup lang="ts">
import { useRouter } from 'vue-router';
import { teachers } from '../data/teachers';
import TeacherCard from '../components/TeacherCard.vue';

const router = useRouter();

function startGame() {
  router.push('/select');
}

function handleSelect(id: string) {
  // In HomeView, clicking a teacher card also starts the game/selection flow
  router.push('/select');
}
</script>

<template>
  <div class="min-h-screen bg-base-100 font-sans">
    <!-- Navbar -->
    <div class="navbar bg-base-100/90 backdrop-blur-md fixed top-0 z-50 shadow-sm">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#features">课程特色</a></li>
            <li><a href="#teachers">师资力量</a></li>
            <li><a href="#about">关于我们</a></li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl font-bold text-primary">
          <span class="text-2xl">🎓</span> OH NO! Teachers
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 font-medium">
          <li><a href="#features">课程特色</a></li>
          <li><a href="#teachers">师资力量</a></li>
          <li><a href="#about">关于我们</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn btn-primary" @click="startGame">立即入学</a>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="hero min-h-screen bg-base-200 relative overflow-hidden pt-16">
      <div class="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10"></div>
      <div class="hero-content flex-col lg:flex-row-reverse gap-12 z-10">
        <div class="relative w-full max-w-lg animate__animated animate__fadeInRight">
           <!-- Placeholder for a hero image or collage of teachers -->
           <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
              <div class="carousel-item" v-for="t in teachers.slice(0,3)" :key="t.id">
                <img :src="t.avatar" class="rounded-box h-64 w-48 object-cover" />
              </div>
            </div>
        </div>
        <div class="text-center lg:text-left animate__animated animate__fadeInLeft">
          <h1 class="text-5xl font-extrabold leading-tight">
            完蛋！<br/>
            <span class="text-primary">我被老师包围了！</span>
          </h1>
          <p class="py-6 text-xl text-base-content/80">
            国内首款沉浸式 AI 互动教学平台。<br/>
            告别枯燥网课，与性格迥异的 AI 导师建立羁绊，<br/>
            在“恋爱”般的体验中掌握硬核知识。
          </p>
          <div class="flex gap-4 justify-center lg:justify-start">
            <button class="btn btn-primary btn-lg shadow-lg hover:scale-105 transition-transform" @click="startGame">
              开始上课
            </button>
            <button class="btn btn-outline btn-lg" onclick="document.getElementById('features').scrollIntoView({behavior: 'smooth'})">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div id="features" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16">为什么选择我们？</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
            <div class="card-body items-center text-center">
              <div class="text-6xl mb-4">🤖</div>
              <h3 class="card-title text-2xl">AI 驱动教学</h3>
              <p>基于大语言模型，每位老师都有独特的性格和教学风格。拒绝照本宣科，因材施教。</p>
            </div>
          </div>
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
            <div class="card-body items-center text-center">
              <div class="text-6xl mb-4">❤️</div>
              <h3 class="card-title text-2xl">情感羁绊系统</h3>
              <p>通过回答问题和互动提升好感度。解锁隐藏剧情、专属语音和彩蛋奖励。</p>
            </div>
          </div>
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
            <div class="card-body items-center text-center">
              <div class="text-6xl mb-4">📚</div>
              <h3 class="card-title text-2xl">硬核知识体系</h3>
              <p>覆盖机器学习、Python 编程、学术英语等实用学科。玩游戏也能学到真本事。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Teachers Section -->
    <div id="teachers" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-4">金牌讲师团</h2>
        <p class="text-center text-lg mb-12 text-base-content/70">选择你心仪的导师，开启专属学习路线</p>
        
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
    <footer class="footer footer-center p-10 bg-primary text-primary-content">
      <aside>
        <p class="font-bold text-2xl">
          🎓 OH NO! Teachers
        </p> 
        <p>Copyright © 2025 - All right reserved by XuehangCang</p>
        <p class="text-sm mt-2 opacity-80">Powered by Aliyun ESA Pages & Edge Functions</p>
      </aside> 
      <nav>
        <div class="grid grid-flow-col gap-4">
          <a class="link link-hover">关于比赛</a>
          <a class="link link-hover">GitHub 仓库</a>
          <a class="link link-hover">联系我们</a>
        </div>
      </nav>
    </footer>
  </div>
</template>


