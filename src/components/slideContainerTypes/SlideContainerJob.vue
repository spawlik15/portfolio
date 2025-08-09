<template>
<div class="flex text-sm lg:text-base flex-col font-semibold space-y-1">
    <span>{{ data.company }} - {{ data.deal }}</span>
    <span class="font-light text-gray-300">{{ data.job }} | {{ data.period }}</span>
</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { type JobData } from '../data/JobData';

defineProps({
  data: {
    type: Object as PropType<JobData>,
    required: true,
  }
});
</script>