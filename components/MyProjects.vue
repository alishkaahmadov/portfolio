<template>
    <div class="font-inter flex flex-col justify-center items-center pb-40 px-30">
        <h1 class="font-bold text-4xl text-[#484E53] pb-1">Projects</h1>
        <h5 class="font-semibold text-sm bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent pb-4">Some of my Work</h5>
        <div class="grid grid-cols-3 gap-6 max-w-[1200px] mt-4">
            <div class="w-[350px]" v-for="element in 6" :key="element">
              <img src="/images/project1.png" alt="">
              <h3 class="text-lg font-bold my-2">Project name/description</h3>
              <p class="text-sm">Technology used</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>