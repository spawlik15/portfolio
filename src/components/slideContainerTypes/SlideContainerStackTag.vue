<template>
<div class="rounded-full flex w-fit items-center gap-1 bg-gradient-to-tr from-[#454540] via-[#565650] to-[#7c7c73] text-sm font-light px-3 py-1 text-white">
    <v-icon :name="data.icon" class="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6" />
    <span class="text-xs lg:text-sm">{{ data.stack }}</span>
</div>
</template>


<script setup lang="ts">
import type { PropType } from 'vue';
import type { StackData } from '../data/StackData';

defineProps({
    data: {
        type: Object as PropType<StackData>,
        required: true,
    }
});
</script>