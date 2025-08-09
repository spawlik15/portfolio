<template>
<div class="flex flex-col space-y-4">
    <p class="text-sm md:text-base lg:text-lg font-light">
        For the past few years, I've been learning the nuances of building web apps. 
        JavaScript is my wheelhouse, — it's the language I’ve used in the vast majority of my projects.  
        Still, my curiosity keeps pushing me forward, which led me to explore PHP as well.  
        Below you will find the set of tools I have used on more complex projects:
    </p>

    <div class="flex flex-row flex-wrap gap-2">
        <SlideContainerStackTag v-for="(stack, i) in data" :key="i" :data="stack" />
    </div>
</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { StackData } from '../data/StackData';
import SlideContainerStackTag from './SlideContainerStackTag.vue';

const props = defineProps({
    data: {
        type: Array as PropType<StackData[]>,
        required: true
    }
});
</script>