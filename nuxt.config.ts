// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts', '@nuxt/image'],
  googleFonts: {
    families: {
      'Oleo+Script': [700],
      // Montserrat: [400, 500, 600, 700],
      // Poppins: [400, 500, 600, 700],
      Inter: [400, 500, 600, 700],
    },
    display: 'swap',
  },
  app: {
    baseURL: '/portfolio/',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})