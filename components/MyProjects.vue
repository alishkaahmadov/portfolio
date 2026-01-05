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
      "Designed and implemented Laravel-based backend services for the Constitutional Court’s public platform. Built secure, multilingual content management, searchable legal decision archives, and an online complaint submission system with structured data storage and validation. Focused on performance, accessibility, and security for a high-traffic government environment.",
  },
  {
    image: "images/adra.png",
    name: "Adra.gov.az",
    link: "https://adra.gov.az",
    description:
      "Contributed to backend development of the electronic admission system using Laravel. Implemented core backend logic for application workflows, data validation, and administrative processing. Worked on integrating admission-related modules with existing systems while ensuring data integrity and secure access control.",
  },
  {
    image: "images/isst.png",
    name: "Isst.az",
    link: "https://isst.az",
    description:
      "Developed backend features for a national infrastructure platform providing public access to water and sanitation projects. Implemented Laravel-based backend logic for online applications (e.g., water meter installation requests), data management, and administrative review workflows.",
  },
  {
    image: "images/cartrack.png",
    name: "Cartrack.az",
    link: "https://cartrack.az",
    description:
      "Worked on backend services for a fleet management platform supporting real-time GPS tracking, reporting, and driver behavior analysis. Implemented backend logic for data ingestion, reporting modules, and performance-optimized database queries to handle large volumes of location and telemetry data.",
  },
  {
    image: "images/scan.png",
    name: "Scan.az",
    link: "https://scan.az",
    description:
      "Developed backend functionality for a SaaS platform enabling businesses to create and manage QR-based digital menus. Built Laravel APIs for menu management, business profiles, and customer access, focusing on scalability, clean data modeling, and ease of administration.",
  },
  {
    image: "images/paqro.png",
    name: "P-Aqro #",
    link: "",
    description:
      "Built a warehouse management system for Azerbaijan’s cotton production sector. The platform tracks product inventory across branches, manages equipment transfers, logs entries and exits, and automatically generates PDF reports for each product shipment.",
  },
  {
    image: "images/paqro-gps.png",
    name: "P-Aqro GPS #",
    link: "",
    description:
      "Designed and built a Laravel-based full stack system to monitor and control farmer activities using GPS data, aimed at preventing fraud and ensuring transparency in agricultural operations. Implemented backend logic to track field work, validate task completion based on location and time data, and detect inconsistencies between reported and actual activity. Built a role- and permission-based authentication system to support multiple user types (administrators, supervisors, farmers), ensuring secure access to sensitive data and operational features.",
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
