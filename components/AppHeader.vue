<template>
    <div class="font-montserrat text-lg flex justify-between items-center py-6 px-30">
        <span class="font-oleo text-2xl italic">Alishka</span>
        <nav>
            <ul class="flex text-[#050505]">
                <li class="mx-12">
                    <a href="#">Home</a>
                </li>
                <li class="mx-12">
                    <a href="#">About</a>
                </li>
                <li class="mx-12">
                    <a href="#">Projects</a>
                </li>
                <li class="mx-12">
                    <a href="#">Resume</a>
                </li>
            </ul>
        </nav>
        <button class="text-[#484E53] hover:text-[#4FC3F7] cursor-pointer border-2 rounded-lg px-4 py-1">Contact</button>
        <div>
            <img src="/images/moon.svg" alt="">
        </div>
    </div>
</template>

<style scoped>
    nav ul li a:hover{
        color: #4FC3F7;
    }
</style>