<template>
    <div class="font-inter flex flex-col justify-center items-center pb-40 px-30">
        <h1 class="font-bold text-4xl text-[#484E53] pb-1">Get In Touch</h1>
        <h5 class="font-semibold text-sm bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent pb-4">Lets work together</h5>
        <form class="w-xl mx-auto p-4 space-y-4">
            <div>
                <label class="text-[#282938] block text-sm font-medium mb-1" for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Ali Ahmadov" class="w-full border border-[#484E53] rounded-md p-2 focus:outline-none" />
            </div>

            <div>
                <label class="text-[#282938] block text-sm font-medium mb-1" for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="example@mail.com" class="w-full border border-[#484E53] rounded-md p-2 focus:outline-none" />
            </div>

            <div>
                <label class="text-[#282938] block text-sm font-medium mb-1" for="message">Message</label>
                <textarea id="message" name="message" rows="4" class="w-full border border-[#484E53] rounded-md p-2 focus:outline-none"></textarea>
            </div>

            <button type="submit" class="w-full bg-[#484E53] text-white px-4 py-3 rounded-md transition">
                Get In Touch
            </button>
        </form>
    </div>
</template>