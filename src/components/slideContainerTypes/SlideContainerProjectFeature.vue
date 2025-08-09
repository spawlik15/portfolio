<template>
<div class="flex flex-row items-center">
    <v-icon name="bi-stars" class="w-4 h-4 lg:w-6 lg:h-6 mr-2 text-yellow-400" />
    <span class="font-light text-sm lg:text-base text-gray-300">{{ feature }}</span>
</div>
</template>

<script setup lang="ts">
defineProps({
    feature : {
        type: String,
        required: true
    }
})
</script>