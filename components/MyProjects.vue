<template>
  <div
    ref="projectsSection"
    class="font-inter flex flex-col justify-center items-center pb-20 xl:pb-40 px-8 xl:px-30 scroll-mt-24"
    id="projects"
  >
    <h1
      class="font-bold text-xl xl:text-4xl text-[#484E53] pb-1 dark:text-white"
    >
      Projects
    </h1>
    <HighlightText label="Some of my Work" />
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 md:gap-6 max-w-[1200px] mt-4"
    >
      <div
        ref="projects"
        class="w-full xl:w-[350px] mb-8 xl:mb-0"
        v-for="project in myProjects"
        :key="project.name"
      >
        <NuxtImg
          :src="project.image"
          :alt="project.name"
          class="min-h-[190px]"
          format="webp"
          width="350"
          sizes="(max-width: 1024px) 100vw, 350px"
        />
        <a
          :href="project.link || '#'"
          target="_blank"
          @click="!project.link && $event.preventDefault()"
          class="inline-block text-base md:text-lg font-bold my-2 dark:text-[#C1C1C1]"
          >{{ project.name }}</a
        >
        <p class="text-xs md:text-sm dark:text-[#A9A9A9]">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const baseUrl = config.app.baseURL;

const myProjects = [
  {
    image: "images/constcourt.png",
    name: "Constcourt.gov.az",
    link: "https://constcourt.gov.az",
    description:
      "Developed the official website for the Constitutional Court with a focus on accessibility and usability. Features include multilingual support, searchable legal decisions, and an online complaint submission system.",
  },
  {
    image: "images/adra.png",
    name: "Adra.gov.az",
    link: "https://adra.gov.az",
    description:
      "Contributed to the development of the website by implementing parts of the electronic admission module and assisting with UI/UX improvements across key sections.",
  },
  {
    image: "images/isst.png",
    name: "Isst.az",
    link: "https://isst.az",
    description:
      "Contributed to the development of ISST.az, a platform providing information on water supply and sanitation projects in Azerbaijan. Assisted with UI/UX design and implementation of features like online applications for water meter installations.",
  },
  {
    image: "images/cartrack.png",
    name: "Cartrack.az",
    link: "https://cartrack.az",
    description:
      "Contributed to the development of CarTrack.az, a fleet management platform offering real-time GPS tracking, detailed reporting, and driver behavior monitoring. Assisted with UI/UX design and implemented features enhancing vehicle oversight and operational efficiency.",
  },
  {
    image: "images/scan.png",
    name: "Scan.az",
    link: "https://scan.az",
    description:
      "Contributed to the development of Scan.az, a digital platform enabling cafes, restaurants, and businesses to create customizable QR code menus. Assisted with UI/UX design and implemented features facilitating easy menu creation and customer engagement.",
  },
  {
    image: "images/paqro.png",
    name: "P-Aqro #",
    link: "",
    description:
      "Built a warehouse management system for Azerbaijan’s cotton production sector. The platform tracks product inventory across branches, manages equipment transfers, logs entries and exits, and automatically generates PDF reports for each product shipment.",
  },
  {
    image: "images/durakOnline.png",
    name: "Durak Online #",
    link: "",
    description:
      "Developed a full-featured online platform for playing the Durak card game (2–6 players) with JWT-based authentication. Designed and implemented all game algorithms and logic from scratch, along with the backend to handle real-time multiplayer gameplay. A challenging freelance project showcasing deep problem-solving skills.",
  },
  {
    image: "images/euroxLotto.png",
    name: "EuroxLotto #",
    link: "",
    description:
      "Built a real-time online lotto game with admin-managed tables and JWT-based authentication. Players buy cards, numbers are drawn every 5 seconds with sound effects, and numbers are automatically marked on cards. The prize goes to the first player(s) to complete their card, splitting if there are multiple winners.",
  },
];

const projectsSection = ref(null);
const projects = ref([]);

onMounted(async () => {
  const gsap = (await import("gsap")).default;
  const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(projects.value, {
    scrollTrigger: {
      trigger: projectsSection.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.8,
    y: 30,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.3,
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
