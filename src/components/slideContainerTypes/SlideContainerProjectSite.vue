<template>
<div class="flex lg:text-base text-sm flex-row">
    <span>Visit the site: <span @click="visit($event)" class="font-light hover:underline hover:underline-offset-2">{{ data }}</span></span>
</div>
</template>

<script setup lang="ts">
const props = defineProps({
    data: {
        type: String,
        required: true
    }
});

const visit = (e : MouseEvent) => {
    e.stopPropagation();

    window.location.href = props.data;
};
</script>