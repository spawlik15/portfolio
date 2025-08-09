<template>
<div class="flex text-sm lg:text-base flex-col font-semibold space-y-2">
    <span>{{ data.school }}</span>
    <span>Study period: <span class="font-light text-gray-300">{{ data.period }}</span></span>
    <span>Status: <span class="font-normal">{{ data.status }}</span></span>
</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { SchoolData } from '../data/SchoolData';

defineProps({
    data: {
        type: Object as PropType<SchoolData>,
        required: true,
    }
});
</script>