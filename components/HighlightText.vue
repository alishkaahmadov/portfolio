<template>
    <h5 :class="[
        'font-semibold bg-gradient-to-r from-[#4FC3F7] to-[#484E53] dark:to-white bg-clip-text text-transparent pb-4',
        fontSize
    ]">
        {{ label }}
    </h5>
</template>

<script setup>

defineProps({
    label: {
        type: String,
        defaulth: 'Contact Me'
    },
    fontSize: {
        type: String,
        defaulth: 'text-sm'
    }
})

</script>