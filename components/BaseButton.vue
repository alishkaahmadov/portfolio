<template>
    <button :class="[
        'font-montserrat cursor-pointer border rounded-3xl px-8 py-2 dark:text-white dark:border-[#4FC3F7]',
        textColor,
        hoverColor
    ]">
        {{ label }}
    </button>
</template>

<script setup>

defineProps({
    label: {
        type: String,
        defaulth: 'Contact Me'
    },
    textColor: {
        type: String,
        defaulth: 'text-[#484E53]'
    },
    hoverColor: {
        type: String,
        defaulth: 'hover:text-[#4FC3F7]'
    },
})

</script>