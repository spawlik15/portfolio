<template>
<div class="flex lg:text-base w-full text-sm font-semibold">
    <span>{{ data.lang }} - <span class="font-light">{{ data.level }}</span></span>
</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { LangData } from '../data/LangData';

defineProps({
    data: {
        type: Object as PropType<LangData>,
        required: true
    }
});
</script>