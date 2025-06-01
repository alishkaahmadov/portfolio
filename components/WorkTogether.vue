<template>
  <div
    ref="workTogether"
    class="font-inter flex flex-col lg:flex-row justify-between items-center pb-10 px-8 lg:px-30 text-[#282938]"
  >
    <h1 class="mb-6 lg:mb-0 text-lg lg:text-6xl dark:text-[#DEDEDE]">
      Let's <span class="hidden lg:inline"><br /></span> Work Together -
    </h1>
    <a
      href="mailto:alishka.ahmdv@gmail.com"
      class="flex items-center border border-[#484E53] rounded-md px-4 py-4 cursor-pointer transition hover:text-[#4FC3F7] hover:border-[#4FC3F7]"
    >
      <NuxtImg src="/images/gmail.png" class="w-6 h-6" alt="Gmail" format="webp" />
      <span class="text-sm lg:text-base ml-2 dark:text-[#C9C9C9]"
        >alishka.ahmdv@gmail.com</span
      >
    </a>
  </div>
</template>

<script setup>
const workTogether = ref(null);

onMounted(async () => {
  const gsap = (await import("gsap")).default;
  const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(workTogether.value, {
    scrollTrigger: {
      trigger: workTogether.value,
      start: "top 80%",
    },
    opacity: 0,
    x: "-500",
    duration: 2,
    ease: "power3.out",
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>
