<template>
<div class="flex flex-row font-semibold items-center">
    <v-icon :name="data.icon" class="w-4 h-4 mg:h-6 md:w-6 lg:w-8 lg:h-8 ml-1 mr-4" />
    <span class="font-light">{{ data.hobby }}</span>
</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { HobbyData } from '../data/HobbyData';

defineProps({
  data: {
    type: Object as PropType<HobbyData>,
    required: true,
  }
});
</script>