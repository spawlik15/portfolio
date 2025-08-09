<template>
<div class="flex flex-col font-semibold space-y-4">
    <img :src="data.photo" class="h-auto lg:max-h-68 w-auto rounded-2xl" />
    
    <div class="flex flex-row flex-wrap gap-2 ">
        <SlideContainerStackTag v-for="(stack, i) in data.stack" :key="i" :data="stack" />
    </div>
    <span>Features:</span>
    <SlideContainerProjectFeature v-for="(feature, i) in data.accomplishments" :key="i" :feature="feature" />
</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ProjectData } from '../data/ProjectData';
import SlideContainerProjectFeature from './SlideContainerProjectFeature.vue';

defineProps({
    data : {
        type: Object as PropType<ProjectData>,
        required: true
    }
});
</script>