<template>
  <div class="bg-[#121211] w-full min-h-screen flex justify-center relative">
    <div class="w-full h-full overflow-y-auto px-8 lg:px-16 py-16">
      <component :is="component()" class="w-full h-full" />
    </div>

    <div class="absolute bottom-6 w-full flex justify-center">
      <span v-if="globalState.threshold > 5000 && !last" class="animate-pulse text-gray-200 font-light">
        Tap to continue
      </span>
    </div>
  </div>
</template>
  

<script setup lang="ts">
import SlideIntroduction from './slideTypes/SlideIntroduction.vue';
import SlideWho from './slideTypes/SlideWho.vue';
import SlideContact from './slideTypes/SlideContact.vue';
import SlideProjects from './slideTypes/SlideProjects.vue';
import SlideEducation from './slideTypes/SlideEducation.vue';
import { globalState } from '@/stores/threshold';

const props = defineProps({
    last : {
        type: Boolean
    },
    type: {
        type: String,
        required: true,
    }
});

const component = () => {
    switch(props.type) {
        case 'intro': return SlideIntroduction;
        case 'who': return SlideWho;
        case 'education': return SlideEducation;
        case 'projects': return SlideProjects;
        default: return SlideContact;
    }
};
</script>

<style scoped>
@keyframes fade-slide {
  from {
    opacity: 0;
    transform: translateY(40px);
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
</style>
