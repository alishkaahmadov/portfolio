<template>
    <div class="font-poppins mb-40 px-30">
        <client-only>
            <div class="flex flex-col justify-center items-center pt-40 bg-cover bg-center rounded-full" :class="isDark ? `bg-[url('/images/background.png')]` : `bg-[url('/images/background-light.png')]`">
                <img class="w-50 h-50 rounded-full object-cover" src="/images/profile.png" alt="Me">
                <h1 class="font-bold text-5xl text-[#484E53] dark:text-white py-4">Ali Ahmadov</h1>
                <HighlightText label="Web Developer" fontSize="text-2xl" />
                <p class="text-center text-[#484E53] dark:text-[#E1E1E1] text-lg max-w-[800px] pb-4">
                    As a dedicated full stack web developer with over 5 years of experience, I specialize in crafting scalable, user-focused web solutions from backend architecture to dynamic frontend interfaces.
                </p>
                <BaseButton label="Contact Me" textColor="text-[#484E53]" hoverColor="hover:text-[#4FC3F7]" />
            </div>
        </client-only>
    </div>
</template>

<script setup>

import { useTheme } from '~/composables/useTheme';

const { isDark } = useTheme();

</script>