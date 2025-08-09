<template>
    <div 
        class="rounded-2xl p-2 w-fit cursor-pointer flex flex-row text-sm text-gray-300 font-light hover:text-white items-center transition-colors duration-300 hover:bg-[#5e5e57]"
        @click="$emit('navigate', slideNum)">
        <v-icon :name="iconName" scale="1.2" class="mr-2" />
        <span v-if="where === 'intro'">Home</span>
        <span v-if="where === 'who'">About Me</span>
        <span v-if="where === 'education'">Education</span>
        <span v-if="where === 'projects'">Creations</span>
        <span v-if="where === 'contact'">Contact</span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const icons = {
    intro: 'io-home',
    who: 'bi-person-fill',
    education: 'md-school-round',
    projects: 'io-code-slash',
    contact: 'bi-telephone-fill'
};

const slides = {
    intro: 0,
    who: 1,
    education: 2,
    projects: 3,
    contact: 4
};

const iconName = computed(() => icons[props.where as keyof typeof icons] ?? 'bi-telephone-fill');
const slideNum = computed(() => slides[props.where as keyof typeof slides] ?? 4);

const props = defineProps({
    where: {
        type: String,
        required: true
    }
});

defineEmits(['navigate']);
</script>