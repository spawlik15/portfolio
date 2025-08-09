<template>
  <div class="flex flex-col lg:flex-row justify-center gap-6">
    <div class="flex flex-col space-y-4">
      <transition name="slide">
        <h1 v-if="globalState.show" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:w-xl w-full font-extrabold mb-6 gradient-glow-text">
          Musika <span class="text-white">– a music learning platform.</span>
        </h1>
      </transition>
      <transition name="slide">
        <p v-if="globalState.show" class="text-base sm-text-lg md:text-xl lg:text-2xl xl:text-3xl lg:w-xl w-full text-gray-300 font-bold">
          Master an instrument of choice
        </p>
      </transition>
      <transition name="scale">
        <SlideContainer v-if="globalState.show" type="aboutp" />
      </transition>
      <transition name="scale">
        <SlideContainer v-if="globalState.show" type="site" />
      </transition>
    </div>

    <transition name="scale">
      <SlideContainer v-if="globalState.show" type="project" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import SlideContainer from '../SlideContainer.vue';
import { globalState } from '@/stores/threshold';
import { onMounted } from 'vue';

onMounted(() => {
  setTimeout(() => {
    globalState.show = true;
  }, 50);
});
</script>

<style scoped>
@keyframes fade-slide {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

.scale-enter-active,
.scale-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.scale-enter-active {
  animation-name: scale-in;
  animation-timing-function: ease-out;
}

.scale-leave-active {
  animation-name: scale-out;
  animation-timing-function: ease-in-out;
}

@keyframes scale-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
  }
}

@keyframes scale-out {
  0% {
    transform: translateX(0vw);
    opacity: 1;
  }
  100% {
    transform: translateX(-100vw);
    opacity: 0;
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