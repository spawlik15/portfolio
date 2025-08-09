<template>
  <div class="flex flex-col bg-[#121211] w-full relative min-h-screen" @click="next">
    <div class="absolute top-2 left-0 w-full z-20 px-4">
      <div class="flex justify-between items-center w-full">

        <button
          @click.stop="toggleMenu"
          class="sm:hidden text-gray-200 text-3xl fixed top-2 right-4 z-50"
        >
          <v-icon class="w-6 h-6" :name="menuOpen ? 'io-close' : 'hi-solid-menu'" />
        </button>

        <div class="hidden sm:flex gap-4 justify-center flex-1">
          <SlideNavigation 
            v-for="(nav, i) in slideTypes" 
            :key="i" 
            :where="nav" 
            @navigate="changeSlide"
            @click.stop="handleNavigationClick"
          />
        </div>

        <div class="w-8 sm:hidden"></div>
      </div>
    </div>

    <div
      v-if="menuOpen"
      class="fixed top-0 right-0 w-full h-full bg-[#121211]/80 flex flex-col items-center justify-center gap-6 z-10"
      @click.self="toggleMenu"
      @click.stop="handleNavigationClick"
    >
      <SlideNavigation 
        v-for="(nav, i) in slideTypes" 
        :key="i" 
        :where="nav" 
        @navigate="changeSlide"
        @click.stop="() => { toggleMenu(); handleNavigationClick }"
      />
    </div>

    <SlidePage
      :type="slideTypes[currentSlide]"
      class="h-fit w-full"
      :last="currentSlide === slideTypes.length - 1"
    />
  </div>
</template>


<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import SlidePage from './components/SlidePage.vue';
import { globalState } from './stores/threshold';
import SlideNavigation from './components/SlideNavigation.vue';

const slideTypes = ['intro', 'who', 'education', 'projects', 'contact'];

const currentSlide = ref(0);
let interval: ReturnType<typeof setInterval>;

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const next = async () => {
  if (currentSlide.value !== (slideTypes.length - 1)) {
    globalState.show = false;
    await sleep(500);
    currentSlide.value += 1;
    globalState.threshold = 0;
  }
};

const changeSlide = async (slideNum: number) => {
  if (slideNum !== currentSlide.value) {
    console.log(currentSlide.value, (slideTypes.length - 1));
    globalState.show = false;
    await sleep(500);
    currentSlide.value = slideNum;
    globalState.threshold = 0;
  }
};

const handleNavigationClick = (e: Event) => {
    e.stopPropagation();
};

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
};

onMounted(() => {
  interval = setInterval(() => {
    globalState.threshold += 1000;
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
