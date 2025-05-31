<template>
  <h2
    :class="[
      'font-semibold bg-gradient-to-r from-[#4FC3F7] to-[#484E53] dark:to-white bg-clip-text text-transparent pb-4',
      fontSize,
    ]"
  >
    {{ label }}
  </h2>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "Contact Me",
  },
  fontSize: {
    type: String,
    default: "text-xs xl:text-sm ",
  },
});
</script>
