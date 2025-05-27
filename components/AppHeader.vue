<template>
    <div class="font-montserrat text-lg flex justify-between items-center py-6 px-30 sticky top-0 z-50 bg-[#E0E8F6] dark:bg-[#1A1A1A] shadow-md">
        <span class="font-oleo text-2xl italic text-primary dark:text-white">Alishka</span>
        <nav>
            <ul class="flex text-[#050505] dark:text-[#C1C1C1]">
                <li class="mx-12 hover:text-[#4FC3F7] transition">
                    <a href="#home" @click.prevent="scrollToSection('home')" class="cursor-pointer">Home</a>
                </li>
                <li class="mx-12 hover:text-[#4FC3F7] transition">
                    <a href="#about" @click.prevent="scrollToSection('about')" class="cursor-pointer">About</a>
                </li>
                <li class="mx-12 hover:text-[#4FC3F7] transition">
                    <a href="#whatIDo" @click.prevent="scrollToSection('whatIDo')" class="cursor-pointer">What I Do</a>
                </li>
                <li class="mx-12 hover:text-[#4FC3F7] transition">
                    <a href="#projects" @click.prevent="scrollToSection('projects')" class="cursor-pointer">Projects</a>
                </li>
            </ul>
        </nav>
        <a href="#contact" @click.prevent="scrollToSection('contact')" class="text-[#484e530] dark:text-white hover:text-[#4FC3F7] cursor-pointer border-2 rounded-lg px-4 py-1 dark:border-[#4FC3F7]">Contact</a>
        <div @click="toggleDark"> 
            <client-only>
                <img v-if="imageSrc" class="cursor-pointer hover:scale-125 transition" :src="baseUrl + imageSrc">
            </client-only>
        </div>
    </div>
</template>

<script setup>

import { useTheme } from '~/composables/useTheme';

const config = useRuntimeConfig();
const baseUrl = config.app.baseURL;

const { isDark, toggleDark } = useTheme();

const scrollToSection = async (id) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}

const imageSrc = computed(() => {
    return isDark.value ? '/images/light.png' : '/images/moon.svg';
})

</script>

<style scoped>
    nav ul li a:hover{
        color: #4FC3F7;
    }
</style>