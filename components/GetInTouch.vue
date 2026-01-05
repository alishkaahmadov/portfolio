<template>
  <div
    ref="contactSection"
    class="font-inter flex flex-col justify-center items-center pb-20 xl:pb-40 px-8 xl:px-30 scroll-mt-24"
    id="contact"
  >
    <h1
      ref="heading"
      class="font-bold text-xl xl:text-4xl text-[#484E53] pb-1 dark:text-white"
    >
      Get In Touch
    </h1>
    <HighlightText label="Lets work together" />
    <form
      class="w-full xl:w-xl mx-auto xl:p-4 space-y-4 text-sm md:text-base"
      action="https://formsubmit.co/alishkaahmadov99@gmail.com"
      method="POST"
    >
      <div ref="nameField">
        <label
          class="text-[#282938] dark:text-white block text-sm font-medium mb-1"
          for="name"
          >Name</label
        >
        <input
          type="text"
          required
          id="name"
          name="name"
          placeholder="Ali Ahmadov"
          class="w-full border border-[#484E53] dark:border-[#D6DDED] dark:text-[#8987A1] rounded-md p-2 focus:outline-none"
        />
      </div>

      <div ref="emailField">
        <label
          class="text-[#282938] dark:text-white block text-sm font-medium mb-1"
          for="email"
          >Email</label
        >
        <input
          type="email"
          required
          id="email"
          name="email"
          placeholder="example@mail.com"
          class="w-full border border-[#484E53] dark:border-[#D6DDED] dark:text-[#8987A1] rounded-md p-2 focus:outline-none"
        />
      </div>

      <div ref="messageField">
        <label
          class="text-[#282938] dark:text-white block text-sm font-medium mb-1"
          for="message"
          >Message</label
        >
        <textarea
          required
          id="message"
          name="message"
          rows="4"
          class="w-full border border-[#484E53] dark:border-[#D6DDED] dark:text-[#8987A1] rounded-md p-2 focus:outline-none"
        ></textarea>
      </div>

      <input
        type="hidden"
        name="_next"
        value="https://alishkaahmadov.github.io/portfolio/thank-you"
      />
      <input type="hidden" name="_captcha" value="false" />

      <button
        ref="button"
        type="submit"
        class="font-semibold text-xs md:text-sm cursor-pointer w-full bg-[#484E53] dark:bg-white text-white dark:text-black px-4 py-3 rounded-md transition hover:bg-[#4FC3F7]"
      >
        Get In Touch
      </button>
    </form>
  </div>
</template>

<script setup>
const contactSection = ref(null);
const nameField = ref(null);
const emailField = ref(null);
const messageField = ref(null);
const heading = ref(null);
const button = ref(null);

onMounted(async () => {
  const gsap = (await import("gsap")).default;
  const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(heading.value, {
    scrollTrigger: {
      trigger: contactSection.value,
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from([nameField.value, emailField.value, messageField.value], {
    scrollTrigger: {
      trigger: contactSection.value,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.2,
  });

  gsap.from(button.value, {
    scrollTrigger: {
      trigger: contactSection.value,
      start: "top 80%",
    },
    opacity: 0,
    scale: 0.8,
    y: 50,
    duration: 1.2,
    ease: "back.out(1.7)",
    delay: 0.5,
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
