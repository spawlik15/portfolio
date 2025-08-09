import { stackData, type StackData } from "./StackData";
import musika from '@/assets/musika.png';

const musikaStack = ['Vue.js', 'Nuxt.js', 'JavaScript', 'Docker', 'SQLite'];

const selectedStack = stackData.filter(s => musikaStack.includes(s.stack));

export interface ProjectData {
    photo: string;
    stack: StackData[],
    accomplishments: string[],
    url: string;
}

export const projectData : ProjectData[] = [
    { photo: musika, stack: selectedStack, accomplishments: [ 'interactive and engaging lessons', 'fun and entertaining minigames', 'daily rewards for your efforts' ], url: 'https://musikaproject.duckdns.org/' }
];