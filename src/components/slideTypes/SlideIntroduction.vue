<template>
<div class="flex flex-col md:flex-row"> 
  <div class="flex-col md:mt-6 lg:mt-12 sm:px-8 md:px-10 lg:px-20">
    <div class="space-y-4">
      <transition name="slide">
        <h1 v-if="globalState.show" class="lg:text-7xl md:text-6xl text-4xl bg-linear-to-r from-green-500 via-green-400 to-green-600 text-transparent bg-clip-text font-bold" :class="{animationEnd: 'gradient-glow-text'}">
          Szymon Pawlik
        </h1>
      </transition>
      <transition name="slide">
        <h4 v-if="globalState.show" class="lg:text-4xl md:text-3xl text-2xl text-gray-200">Fullstack Developer</h4>
      </transition>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { globalState } from '@/stores/threshold';
import { ref } from 'vue';

const animationEnd = ref(false);
setTimeout(() => {
  animationEnd.value = true;
  globalState.show = true;
}, 500);
</script>

<style scoped>
@keyframes fade-slide {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-fade-slide {
  animation: fade-slide 0.5s ease-out forwards;
}

.gradient-glow-text {
  background: linear-gradient(
    90deg,
    #22c55e,
    #86efac,
    #22c55e,
    #16a34a
  );
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: glowing-gradient 4s ease-in-out infinite;
}

@keyframes glowing-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out;
}
.slide-leave-active {
  animation: slide-out 0.5s ease-in-out;
}
@keyframes slide-in {
  0% {
    transform: translateY(-40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes slide-out {
  0% {
    transform: translateX(0vh);
    opacity: 1;
  }
  100% {
    transform: translateX(-100vh);
    opacity: 0;
  }
}
</style>