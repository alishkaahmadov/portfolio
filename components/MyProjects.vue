<template>
    <div class="font-inter flex flex-col justify-center items-center pb-40 px-30">
        <h1 class="font-bold text-4xl text-[#484E53] pb-1 dark:text-white">Projects</h1>
        <HighlightText label="Some of my Work" />
        <div class="grid grid-cols-3 gap-6 max-w-[1200px] mt-4">
            <div class="w-[350px]" v-for="element in 6" :key="element">
              <img src="/images/project1.png" alt="">
              <h3 class="text-lg font-bold my-2 dark:text-[#C1C1C1]">Project name/description</h3>
              <p class="text-sm dark:text-[#A9A9A9]">Technology used</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>