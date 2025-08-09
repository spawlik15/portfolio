<template>
  <div v-if="globalState.show" @click.stop="navigate">
    <transition name="scale">
      <div
        class="relative flex flex-col p-4 rounded-3xl text-gray-200 bg-linear-to-tr from-[#20201d] via-[#2a2a26] to-[#42423c] hover:scale-105 transition-all duration-500 h-44 lg:h-48 border-[0.5px] border-[#606058] w-xs"
      >
        <div class="flex flex-col space-y-4 pointer-events-none">
          <div class="flex items-center flex-row">
            <v-icon
              :name="contact.icon"
              class="h-8 w-8 md:h-10 md:w-10 lg:w-12 lg:h-12 rounded-lg md:rounded-xl lg:rounded-2xl bg-linear-to-tr from-[#454540] via-[#51514b] to-[#6f6f67] p-2 mr-4"
              :class="contact.color"
            />
            <span class="text-lg md:text-2xl lg:text-3xl text-white font-light">{{ contact.title }}</span>
          </div>
          <div class="flex text-left flex-col flex-wrap ml-1 items-center justify-center mt-4 space-y-4">
            <span class="font-light text-sm md:text-base lg:text-lg">{{ contact.name }}</span>
          </div>
        </div>        
      </div>
    </transition>
  </div>
  <div
    v-if="showClipboardToast && contact.title === 'E-Mail'"
    class="fixed top-4 left-1/2 md:top-auto -translate-x-1/2 flex md:bottom-4 flex-row w-fit font-light border-[0.5px] border-[#606058] bg-[#20201d] rounded-xl px-3 py-1 z-50"
  >
    <v-icon name="fc-checkmark" class="w-4 h-4 mr-2" />
    <span class="text-gray-300 text-sm">Copied to clipboard!</span>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue';
import type { ContactData } from './data/ContactData';
import { globalState } from '@/stores/threshold';

const showClipboardToast = ref(false);

const navigate = async () => {
  if (props.contact.title !== 'E-Mail') {
    window.open(props.contact.path, '_blank');
  } else {
    await navigator.clipboard.writeText(props.contact.path);
    showClipboardToast.value = true;
    setTimeout(() => {
      showClipboardToast.value = false;
    }, 1000);
  }
};

const props = defineProps({
  contact: {
    type: Object as PropType<ContactData>,
    required: true,
  },
});
</script>

<style>
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
</style>