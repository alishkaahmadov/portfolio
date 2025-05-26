<template>
    <div class="font-montserrat text-lg flex justify-between items-center py-6 px-30 sticky top-0 z-50 bg-[#E0E8F6] dark:bg-[#1A1A1A] shadow-md">
        <span class="font-oleo text-2xl italic text-primary dark:text-white">Alishka</span>
        <nav>
            <ul class="flex text-[#050505] dark:text-[#C1C1C1]">
                <li class="mx-12">
                    <a href="#home">Home</a>
                </li>
                <li class="mx-12">
                    <a href="#about">About</a>
                </li>
                <li class="mx-12">
                    <a href="#whatIDo">What I Do</a>
                </li>
                <li class="mx-12">
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </nav>
        <a href="#contact" class="text-[#484e530] dark:text-white hover:text-[#4FC3F7] cursor-pointer border-2 rounded-lg px-4 py-1 dark:border-[#4FC3F7]">Contact</a>
        <div @click="toggleDark"> 
            <client-only>
                <img v-if="imageSrc" class="cursor-pointer" :src="baseUrl + imageSrc">
            </client-only>
        </div>
    </div>
</template>

<script setup>

import { useTheme } from '~/composables/useTheme';

const config = useRuntimeConfig();
const baseUrl = config.app.baseURL;

const { isDark, toggleDark } = useTheme();

const imageSrc = computed(() => {
    return isDark.value ? '/images/light.png' : '/images/moon.svg';
})

</script>

<style scoped>
    nav ul li a:hover{
        color: #4FC3F7;
    }
</style>