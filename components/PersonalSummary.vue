<template>
  <div
    class="font-inter mb-20 xl:mb-40 px-8 xl:px-30 scroll-mt-24"
    id="home"
    ref="hero"
  >
    <div
      class="relative flex flex-col justify-center items-center pt-20 xl:pt-40 rounded-full overflow-hidden"
    >
      <client-only>
        <NuxtImg
          v-if="isDark"
          class="absolute inset-0 w-full h-full object-cover"
          src="/images/background.png"
          alt="Background"
          format="webp"
        />
        <NuxtImg
          v-else
          class="absolute inset-0 w-full h-full object-cover"
          src="/images/background-light.png"
          alt="Background"
          format="webp"
        />
      </client-only>

      <div class="hidden">
        <NuxtImg src="/images/background.png" format="webp" />
        <NuxtImg src="/images/background-light.png" format="webp" />
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center">
        <NuxtImg
          class="w-50 h-50 rounded-full object-cover"
          src="/images/profile.png"
          alt="Me"
          format="webp"
          preload
          priority
        />
        <h1
          class="font-bold text-2xl xl:text-5xl text-[#484E53] dark:text-white py-4"
        >
          Ali Ahmadov
        </h1>
        <HighlightText label="Web Developer" fontSize="text-lg xl:text-2xl" />
        <p
          class="text-center text-[#484E53] dark:text-[#E1E1E1] text-base xl:text-lg max-w-[800px] pb-4"
        >
          As a dedicated full stack web developer with over 5 years of
          experience, I specialize in crafting scalable, user-focused web
          solutions from backend architecture to dynamic frontend interfaces.
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
