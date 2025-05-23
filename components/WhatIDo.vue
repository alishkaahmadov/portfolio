<template>
    <div class="font-inter flex flex-col justify-center items-center pb-40 px-30">
        <h1 class="font-bold text-4xl text-[#484E53] pb-1">What I do</h1>
        <h5 class="font-semibold text-sm bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent pb-4">My Services</h5>
        <div class="grid grid-cols-3 gap-6 max-w-[1200px] mt-4">
            <div class="flex bg-[#ECF4FF] p-6 rounded-lg" :class="service.isLarge ? 'col-span-2' : ''" v-for="service in services" :key="service.title">
                <div>
                  <img class="w-10 h-10 rounded-lg" :src="baseUrl + service.image" :alt="service.imageAlt">
                  <h3 class="font-semibold text-base mt-3 mb-4 text-[#484E53]">{{ service.title }}</h3>
                  <p class="text-sm text-[#1C1E53]">{{ service.description }}</p>
                </div>
                <img class="ml-3" v-if="service.secondImage" :src="baseUrl + service.secondImage" alt="AI">
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
const baseUrl = config.app.baseURL;

const services = [
  {
    title: 'Frontend Development & UI Engineering',
    description:
      'I craft responsive, accessible, and user-friendly interfaces using Vue.js, Nuxt.js, and Tailwind CSS. From dynamic dashboards to mobile-optimized UIs, I ensure every frontend is visually polished, performant, and easy to use—designed with real users in mind.',
    image: 'images/frontend.png',
    imageAlt: 'frontend',
    isLarge: false,
    secondImage: false
  },
  {
    title: 'Backend Development & API Design',
    description:
      'I build secure, scalable backends using Node.js, Express, Laravel, and more. With experience in creating RESTful APIs, managing databases, and handling complex logic, I deliver backend systems that are clean, maintainable, and reliable.',
    image: 'images/backend.png',
    imageAlt: 'backend',
    isLarge: false,
    secondImage: false
  },
  {
    title: 'Real-Time Communication Systems',
    description:
      'Using MQTT, FCM, and third-party integrations, I develop real-time messaging platforms and notification systems. From unified support chat to multi-channel communication, I enable seamless interactions at scale.',
    image: 'images/realtime.png',
    imageAlt: 'realtime',
    isLarge: false,
    secondImage: false
  },
  {
    title: 'Automation & Intelligent Chatbots',
    description:
      'I implement chatbot systems that automate repetitive workflows and improve user engagement. With custom interaction flows and smart logic, I help businesses reduce manual workload while delivering consistent user experiences.',
    image: 'images/chatbot.png',
    imageAlt: 'chatbot',
    isLarge: true,
    secondImage: 'images/ai_image.png',
    secondImageAlt: 'AI',
  },
  {
    title: 'Smart Dashboards & Data Visualization',
    description:
      'I build interactive dashboards that turn raw data into actionable insights. Whether it’s GPS tracking, usage analytics, or reporting, I develop tools that help users understand and act on complex information with clarity.',
    image: 'images/dashboard.png',
    imageAlt: 'dashboard',
    isLarge: false,
    secondImage: false
  },
]


</script>