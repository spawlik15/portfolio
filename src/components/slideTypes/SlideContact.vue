<template>
  <div class="flex flex-col items-center justify-center text-center py-16 px-4">
    <transition name="slide">
      <h1 v-if="globalState.show" class="text-white text-3xl md:text-4xl font-bold mb-4">
        Thanks for stopping by! <v-icon class="text-red-400 w-14 h-14" name="fa-heart" />
      </h1>
    </transition>
    <transition name="slide">
      <p v-if="globalState.show" class="text-gray-300 max-w-2xl mb-10">
        If you made it this far, I really appreciate your time.
        Need help with coding, have a project in mind, or just want to say hi?
        Let’s connect!
      </p>
    </transition>
    <transition-group
      name="scale"
      tag="div"
      class="flex flex-col lg:flex-row gap-6"
    >
      <SlideContactInfo
        v-for="(contact, i) in contactData"
        :key="i"
        :contact="contact"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { contactData } from '../data/ContactData';
import SlideContactInfo from '../SlideContactInfo.vue';
import { globalState } from '@/stores/threshold';

onMounted(() => {
  setTimeout(() => (globalState.show = true), 50);
});
</script>

<style>
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