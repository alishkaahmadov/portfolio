<template>
  <div
    class="font-inter mb-20 xl:mb-40 px-8 xl:px-30 scroll-mt-24"
    id="home"
    ref="hero"
  >
    <div
      class="relative flex flex-col justify-center items-center pt-20 xl:pt-40 overflow-hidden"
    >
      <client-only>
        <NuxtImg
          v-if="isDark"
          class="absolute inset-0 w-full h-full object-cover rounded-full"
          src="/images/background.png"
          alt="Background"
        />
        <NuxtImg
          v-else
          class="absolute inset-0 w-full h-full object-cover rounded-full"
          src="/images/background-light.png"
          alt="Background"
        />
      </client-only>

      <div class="hidden">
        <NuxtImg src="/images/background.png" />
        <NuxtImg src="/images/background-light.png" />
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center">
        <NuxtImg
          class="w-50 h-50 rounded-full object-cover"
          src="/images/profile.png"
          alt="Me"
          format="webp"
          width="200"
          height="200"
          preload
          priority
        />
        <h1
          class="font-bold text-2xl xl:text-5xl text-[#484E53] dark:text-white py-4"
        >
          Ali Ahmadov
        </h1>
        <HighlightText label="Backend Developer" fontSize="text-lg xl:text-2xl" />
        <p
          class="text-center text-[#484E53] dark:text-[#E1E1E1] text-base xl:text-lg max-w-[800px] pb-4"
        >
        I design and build secure, scalable backend systems that power real-world, high-traffic applications.
        With 6+ years of professional experience, I specialize in Laravel and PHP, creating robust APIs, complex business logic, and data-driven systems for production environments — including government platforms and real-time communication products.
        </p>
        <BaseButton
          label="Contact Me"
          href="#contact"
          textColor="text-[#484E53]"
          hoverColor="hover:text-[#4FC3F7]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from "~/composables/useTheme";

const { isDark } = useTheme();
const hero = ref(null);

onMounted(async () => {
  const gsap = (await import("gsap")).default;
  const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(hero.value, {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power3.out",
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
