<template>
    <a 
        v-bind="$attrs"
        :href="href"
        :class="[
            'font-montserrat cursor-pointer text-sm md:text-base border rounded-3xl px-8 py-2 dark:text-white dark:border-[#4FC3F7]',
            textColor,
            hoverColor
        ]"
    >
        {{ label }}
</a>
</template>

<script setup>

defineProps({
    label: {
        type: String,
        default: 'Contact Me'
    },
    textColor: {
        type: String,
        default: 'text-[#484E53]'
    },
    hoverColor: {
        type: String,
        default: 'hover:text-[#4FC3F7]'
    },
    href: {
        type: String,
        default: ''
    }
})

</script>