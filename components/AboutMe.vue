<template>
  <div
    class="font-inter flex flex-col justify-center items-center pb-20 xl:pb-40 px-8 xl:px-30 scroll-mt-24"
    id="about"
    ref="about"
  >
    <h1
      class="font-bold text-xl xl:text-4xl text-[#484E53] pb-1 dark:text-white"
    >
      About Me
    </h1>
    <HighlightText label="Get to know me" />
    <p
      class="text-center text-[#1C1E53] dark:text-[#E1E1E1] text-sm xl:text-base max-w-[800px] pb-4"
    >
      Hi there! I’m a backend‑focused full stack developer with a strong foundation in system architecture, database design, and application security. Over the past six years, I’ve built and maintained backend services used in production by thousands of users, with a particular focus on reliability, performance, and maintainability.
    </p>
    <p
      class="text-center text-[#1C1E53] dark:text-[#E1E1E1] text-sm xl:text-base max-w-[800px] pb-4"
    >
      I've had the opportunity to work on high-impact projects — from government
      platforms reviewed by state security agencies to real-time messaging
      systems and dynamic admin dashboards. My background spans frontend design,
      backend logic, API development, and database management across MySQL,
      MongoDB, and Redis, all containerized with Docker for smooth deployment.
    </p>
    <p
      class="text-center text-[#1C1E53] dark:text-[#E1E1E1] text-sm xl:text-base max-w-[800px] pb-4"
    >
      I’m passionate about creating digital products that are not just
      functional, but also fast, intuitive, and maintainable. Whether you need a
      custom dashboard, a dynamic website, or a real-time chat system, I’m here
      to help bring your vision to life.
    </p>
    <p
      class="text-center text-[#1C1E53] dark:text-[#E1E1E1] text-sm xl:text-base max-w-[800px] pb-4"
    >
      Let’s build something great together — get in touch and let’s make it
      happen!
    </p>
    <BaseButton
      :href="`${baseUrl}resume.pdf`"
      download
      label="Download Resume"
      textColor="text-[#484E53]"
      hoverColor="hover:text-[#4FC3F7]"
    />
  </div>
</template>

<script setup>

const config = useRuntimeConfig();
const baseUrl = config.app.baseURL;

const about = ref(null);

onMounted(async () => {
  const gsap = (await import('gsap')).default
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
  gsap.registerPlugin(ScrollTrigger)
  
  gsap.from(about.value, {
    opacity: 0,
    x: "500",
    duration: 2,
    ease: "power3.out",
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
