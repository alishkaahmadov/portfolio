<template>
  <div
    ref="servicesSection"
    class="font-inter flex flex-col justify-center items-center pb-20 xl:pb-40 px-8 xl:px-30 scroll-mt-24"
    id="whatIDo"
  >
    <h1
      class="font-bold text-xl xl:text-4xl text-[#484E53] pb-1 dark:text-white"
    >
      What I do
    </h1>
    <HighlightText label="My Services" />
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 md:gap-6 max-w-[1200px] mt-4"
    >
      <div
        ref="serviceCards"
        class="flex flex-col xl:flex-row bg-[#ECF4FF] dark:bg-[#2B2B2B] p-6 rounded-lg mb-8 xl:mb-0"
        :class="service.isLarge ? 'xl:col-span-2' : ''"
        v-for="service in services"
        :key="service.title"
      >
        <div>
          <NuxtImg
            class="w-10 h-10 rounded-lg"
            :src="service.image"
            :alt="service.imageAlt"
            format="webp"
            width="40"
            height="40"
          />
          <h3
            class="font-semibold text-sm md:text-base mt-3 mb-4 text-[#484E53] dark:text-white"
          >
            {{ service.title }}
          </h3>
          <p class="text-xs md:text-sm text-[#1C1E53] dark:text-[#E1E1E1]">
            {{ service.description }}
          </p>
        </div>
        <NuxtImg
          class="w-[250px] md:w-[300px] xl:w-full h-auto xl:ml-3 mt-3 xl:mt-0"
          v-if="service.secondImage"
          :src="service.secondImage"
          alt="AI"
          format="webp"
          width="800"
          sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, 800px"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const baseUrl = config.app.baseURL;

const services = [
  {
    title: "Backend Development & API Design",
    description:
      "I build secure, scalable backends using Laravel, Node.js, Express and more. With experience in creating RESTful APIs, managing databases, and handling complex logic, I deliver backend systems that are clean, maintainable, and reliable.",
    image: "images/backend.png",
    imageAlt: "backend",
    isLarge: false,
    secondImage: false,
  },
  {
    title: "Real-Time Communication Systems",
    description:
      "Using MQTT, FCM, and third-party integrations, I develop real-time messaging platforms and notification systems. From unified support chat to multi-channel communication, I enable seamless interactions at scale.",
    image: "images/realtime.png",
    imageAlt: "realtime",
    isLarge: false,
    secondImage: false,
  },
  {
    title: "Frontend Development & UI Engineering",
    description:
      "I craft responsive, accessible, and user-friendly interfaces using Vue.js, Nuxt.js, and Tailwind CSS. From dynamic dashboards to mobile-optimized UIs, I ensure every frontend is visually polished, performant, and easy to use—designed with real users in mind.",
    image: "images/frontend.png",
    imageAlt: "frontend",
    isLarge: false,
    secondImage: false,
  },
  {
    title: "Automation & Intelligent Chatbots",
    description:
      "I implement chatbot systems that automate repetitive workflows and improve user engagement. With custom interaction flows and smart logic, I help businesses reduce manual workload while delivering consistent user experiences.",
    image: "images/chatbot.png",
    imageAlt: "chatbot",
    isLarge: true,
    secondImage: "images/ai_image.png",
    secondImageAlt: "AI",
  },
  {
    title: "Smart Dashboards & Data Visualization",
    description:
      "I build interactive dashboards that turn raw data into actionable insights. Whether it’s GPS tracking, usage analytics, or reporting, I develop tools that help users understand and act on complex information with clarity.",
    image: "images/dashboard.png",
    imageAlt: "dashboard",
    isLarge: false,
    secondImage: false,
  },
];

const servicesSection = ref(null);
const serviceCards = ref([]);

onMounted(async () => {
  const gsap = (await import("gsap")).default;
  const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(serviceCards.value, {
    scrollTrigger: {
      trigger: servicesSection.value,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.3,
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
