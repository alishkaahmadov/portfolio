<template>
  <div
    ref="header"
    class="font-inter text-lg flex justify-between items-center py-6 px-8 xl:px-30 sticky top-0 z-50 bg-[#E0E8F6] dark:bg-[#1A1A1A] shadow-md"
  >
    <span
      class="font-oleo text-lg md:text-2xl italic text-primary dark:text-white"
      >Alishka</span
    >
    <nav>
      <ul class="hidden lg:flex text-[#050505] dark:text-[#C1C1C1]">
        <li class="mx-12 hover:text-[#4FC3F7] transition">
          <a
            href="#home"
            @click.prevent="scrollToSection('home')"
            class="cursor-pointer"
            >Home</a
          >
        </li>
        <li class="mx-12 hover:text-[#4FC3F7] transition">
          <a
            href="#about"
            @click.prevent="scrollToSection('about')"
            class="cursor-pointer"
            >About</a
          >
        </li>
        <li class="mx-12 hover:text-[#4FC3F7] transition">
          <a
            href="#whatIDo"
            @click.prevent="scrollToSection('whatIDo')"
            class="cursor-pointer"
            >What I Do</a
          >
        </li>
        <li class="mx-12 hover:text-[#4FC3F7] transition">
          <a
            href="#projects"
            @click.prevent="scrollToSection('projects')"
            class="cursor-pointer"
            >Projects</a
          >
        </li>
      </ul>
    </nav>
    <a
      href="#contact"
      @click.prevent="scrollToSection('contact')"
      class="hidden lg:block text-[#484e530] dark:text-white hover:text-[#4FC3F7] cursor-pointer border-2 rounded-lg px-4 py-1 dark:border-[#4FC3F7]"
      >Contact</a
    >
    <div class="flex items-center">
      <div @click="toggleDark">
        <NuxtImg
          v-if="isDark"
          class="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer hover:scale-125 transition"
          src="/images/light.png"
          alt="Light Mode"
          format="webp"
        />
        <NuxtImg
          v-else
          class="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer hover:scale-125 transition"
          src="/images/moon.png"
          alt="Dark Mode"
          format="webp"
        />
      </div>
      <div class="hidden">
        <NuxtImg src="/images/light.png" format="webp" />
        <NuxtImg src="/images/moon.png" format="webp" />
      </div>
      <div class="relative ml-6 lg:hidden">
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          class="w-6 h-6 cursor-pointer dark:text-white"
          @click="isMobileNavOpen = !isMobileNavOpen"
        />
        <ul
          v-if="isMobileNavOpen"
          class="min-w-50 absolute top-6 right-0 flex flex-col bg-[#E0E8F6] dark:bg-[#1A1A1A] text-[#050505] dark:text-[#C1C1C1] p-4 lg:hidden shadow-md"
        >
          <li class="py-2 border-b border-gray-300 dark:border-gray-600">
            <a
              href="#home"
              @click.prevent="
                scrollToSection('home');
                isMobileNavOpen = false;
              "
              >Home</a
            >
          </li>
          <li class="py-2 border-b border-gray-300 dark:border-gray-600">
            <a
              href="#about"
              @click.prevent="
                scrollToSection('about');
                isMobileNavOpen = false;
              "
              >About</a
            >
          </li>
          <li class="py-2 border-b border-gray-300 dark:border-gray-600">
            <a
              href="#whatIDo"
              @click.prevent="
                scrollToSection('whatIDo');
                isMobileNavOpen = false;
              "
              >What I Do</a
            >
          </li>
          <li class="py-2 border-b border-gray-300 dark:border-gray-600">
            <a
              href="#projects"
              @click.prevent="
                scrollToSection('projects');
                isMobileNavOpen = false;
              "
              >Projects</a
            >
          </li>
          <li class="py-2">
            <a
              href="#contact"
              @click.prevent="
                scrollToSection('contact');
                isMobileNavOpen = false;
              "
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from "~/composables/useTheme";
import gsap from "gsap";
import { NuxtImg } from "#components";

const header = ref(null);
onMounted(() => {
  gsap.from(header.value, {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out",
  });
});

const config = useRuntimeConfig();
const baseUrl = config.app.baseURL;

const { isDark, toggleDark } = useTheme();

const isMobileNavOpen = ref(false);

const scrollToSection = async (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const imageSrc = computed(() => {
  return isDark.value ? "/images/light.png" : "/images/moon.svg";
});
</script>

<style scoped>
nav ul li a:hover {
  color: #4fc3f7;
}
</style>
