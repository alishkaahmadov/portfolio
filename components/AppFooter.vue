<template>
  <div
    ref="footer"
    class="font-inter flex flex-col xl:flex-row justify-between items-center py-10 px-8 xl:px-30 text-[#282938] border-t"
  >
    <span ref="copyright" class="dark:text-[#A9A9A9] mb-6 xl:mb-0"
      >© 2025 All rights reserved.</span
    >
    <div ref="icons" class="flex">
      <a
        class="mr-4"
        href="https://github.com/alishkaahmadov"
        target="_blank"
        aria-label="GitHub"
      >
        <FontAwesomeIcon
          icon="fa-brands fa-github"
          class="hover:text-gray-600 dark:text-[#A9A9A9] border transition p-1 rounded-full w-5 h-5 text-xl"
        />
      </a>
      <a
        class="mr-4"
        href="https://www.linkedin.com/in/alishkaahmadov"
        target="_blank"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon
          icon="fa-brands fa-linkedin"
          class="hover:text-blue-600 dark:text-[#A9A9A9] border transition p-1 rounded-full w-5 h-5 text-xl"
        />
      </a>
      <a class="mr-4" href="mailto:alishkaahmadov99@gmail.com" aria-label="Email">
        <FontAwesomeIcon
          icon="fa-solid fa-envelope"
          class="hover:text-red-500 dark:text-[#A9A9A9] border transition p-1 rounded-full w-5 h-5 text-xl"
        />
      </a>
      <a href="tel:+994702547452" aria-label="Phone">
        <FontAwesomeIcon
          icon="fa-solid fa-phone"
          class="hover:text-green-600 dark:text-[#A9A9A9] border transition p-1 rounded-full w-5 h-5 text-xl"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
const footer = ref(null);
const copyright = ref(null);
const icons = ref(null);

onMounted(async () => {
  const gsap = (await import('gsap')).default
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
  gsap.registerPlugin(ScrollTrigger)

  gsap.from([copyright.value, icons.value], {
    scrollTrigger: {
      trigger: footer.value,
      start: "top 90%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.3,
  }); 
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>
