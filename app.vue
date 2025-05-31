<template>
  <div class="bg-[#E0E8F6] dark:bg-[#1A1A1A] min-h-screen">
    <AppHeader />
    <PersonalSummary />
    <AboutMe />
    <WhatIDo />
    <MyProjects />
    <GetInTouch />
    <WorkTogether />
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: 'Alishka – Web Developer',
  meta: [
    {
      name: 'I’m a frontend developer with 5+ years of experience building fast, responsive, and accessible websites using Nuxt.js and Tailwind CSS. Check out my latest projects and design-driven development work.',
      content: 'Portfolio of Alishka, a fullstack developer specializing in Nuxt.js and Tailwind CSS.'
    }
  ]
})
</script>