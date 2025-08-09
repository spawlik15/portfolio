<template>
<div class="flex flex-col lg:flex-row gap-6 justify-center place-items-center">
    <div class="flex flex-col gap-6 self-start w-full lg:w-fit">
        <transition name="scale">
            <SlideContainer v-if="globalState.show" type="education" />
        </transition>
        <transition name="scale">
            <SlideContainer v-if="globalState.show" type="language" />
        </transition>
    </div>
    <transition name="scale">
        <SlideContainer v-if="globalState.show" class="self-start" type="job" />
    </transition>
</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import SlideContainer from '../SlideContainer.vue';
import { globalState } from '@/stores/threshold';

onMounted(() => {
    setTimeout(() => (globalState.show = true), 50);
});
</script>

<style scoped>
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
