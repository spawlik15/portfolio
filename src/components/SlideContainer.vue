<template>
<div class="flex flex-col p-4 rounded-3xl text-gray-200 bg-linear-to-tr from-[#20201d] via-[#2a2a26] to-[#42423c] hover:scale-105 transition-all duration-500 h-fit border-[0.5px] border-[#606058] " :class="type !== 'photo' ? 'w-full lg:w-xl': 'w-fit'">
    <div class="flex flex-col space-y-4">
        <div class="flex items-center flex-row">
            <v-icon :name="iconIs().icon" class="h-8 w-8 md:h-10 md:w-10 lg:w-12 lg:h-12 rounded-lg md:rounded-xl lg:rounded-2xl bg-linear-to-tr from-[#454540] via-[#51514b] to-[#6f6f67] p-2 mr-4" :class="iconIs().color" />
            <span class="md:text-xl lg:text-3xl text-white font-light">{{ componentIs().title }}</span>
        </div>

        <div v-if="type === 'language'" class="flex flex-row flex-wrap ml-1 gap-4">
            <component
                v-for="(data, i) in dataIs()"
                :key="i"
                :is="componentIs().container"
                :type="props.type"
                :data="data"
            />
        </div>

        <div v-else class="flex flex-col ml-1 space-y-4">
            <component
                v-for="(data, i) in type === 'stack' || type === 'site' ? [dataIs()] : dataIs()"
                :key="i"
                :is="componentIs().container"
                :type="props.type"
                :data="data"
            />
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import SlideContainerAbout from './slideContainerTypes/SlideContainerAbout.vue';
import SlideContainerJob from './slideContainerTypes/SlideContainerJob.vue';
import SlideContainerSchool from './slideContainerTypes/SlideContainerSchool.vue';
import SlideContainerLangs from './slideContainerTypes/SlideContainerLangs.vue';
import { schoolData } from './data/SchoolData';
import { jobData } from './data/JobData';
import { langData } from './data/LangData';
import SlideContainerStack from './slideContainerTypes/SlideContainerStack.vue';
import { stackData } from './data/StackData';
import SlideContainerHobbies from './slideContainerTypes/SlideContainerHobbies.vue';
import { hobbyData } from './data/HobbyData';
import SlideContainerAboutProject from './slideContainerTypes/SlideContainerAboutProject.vue';
import SlideContainerProject from './slideContainerTypes/SlideContainerProject.vue';
import { projectData } from './data/ProjectData';
import SlideContainerProjectSite from './slideContainerTypes/SlideContainerProjectSite.vue';

const props = defineProps({
    type: String
});

const componentIs = () => {
    switch (props.type) {
        case 'about': return { container: SlideContainerAbout, title: 'About Me' };
        case 'education': return { container: SlideContainerSchool, title: 'Education' };
        case 'stack': return { container: SlideContainerStack, title: 'Tech Stack' };
        case 'hobby': return { container: SlideContainerHobbies, title: 'Hobbies' };
        case 'job': return { container: SlideContainerJob, title: 'Experience' };
        case 'aboutp': return { container: SlideContainerAboutProject, title: 'About Project' };
        case 'project': return { container: SlideContainerProject, title: 'Musika' };
        case 'site': return { container: SlideContainerProjectSite, title: 'Site' };
        default: return { container: SlideContainerLangs, title: 'Languages' };
    }
};

const iconIs = () => {
    switch (props.type) {
        case 'about': return { icon: 'bi-person-fill', color: 'text-green-400' };
        case 'education': return { icon: 'fa-shapes', color: 'text-red-400' };
        case 'stack': return { icon: 'bi-stack', color: 'text-yellow-400' };
        case 'hobby': return { icon: 'fa-heart', color: 'text-red-400' };
        case 'job': return { icon: 'bi-briefcase-fill', color: 'text-blue-400' };
        case 'aboutp': return { icon: 'md-info', color: 'text-gray-400' };
        case 'project': return { icon: 'io-musical-notes', color: 'text-green-400' };       
        default: return { icon: 'md-language', color: 'text-gray-400' };
    }
};

const dataIs = () => {
    switch (props.type) {
        case 'about': return [{}];
        case 'education': return schoolData;
        case 'stack': return stackData;
        case 'hobby': return hobbyData;
        case 'job': return jobData;
        case 'aboutp': return [{}];
        case 'project': return projectData;
        case 'site': return projectData[0].url;
        default: return langData; 
    }
};
</script>