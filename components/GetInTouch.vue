<template>
    <div class="font-inter flex flex-col justify-center items-center pb-40 px-30 scroll-mt-24" id="contact">
        <h1 class="font-bold text-4xl text-[#484E53] pb-1 dark:text-white">Get In Touch</h1>
        <HighlightText label="Lets work together" />
        <form class="w-xl mx-auto p-4 space-y-4" action="https://formsubmit.co/alishka.ahmdv@gmail.com" method="POST">
            <div>
                <label class="text-[#282938] dark:text-white block text-sm font-medium mb-1" for="name">Name</label>
                <input type="text" required id="name" name="name" placeholder="Ali Ahmadov" class="w-full border border-[#484E53] dark:border-[#D6DDED] dark:text-[#8987A1] rounded-md p-2 focus:outline-none" />
            </div>

            <div>
                <label class="text-[#282938] dark:text-white block text-sm font-medium mb-1" for="email">Email</label>
                <input type="email" required id="email" name="email" placeholder="example@mail.com" class="w-full border border-[#484E53] dark:border-[#D6DDED] dark:text-[#8987A1] rounded-md p-2 focus:outline-none" />
            </div>

            <div>
                <label class="text-[#282938] dark:text-white block text-sm font-medium mb-1" for="message">Message</label>
                <textarea required id="message" name="message" rows="4" class="w-full border border-[#484E53] dark:border-[#D6DDED] dark:text-[#8987A1] rounded-md p-2 focus:outline-none"></textarea>
            </div>

            <input type="hidden" name="_next" value="https://alishkaahmadov.github.io/portfolio/thank-you" />
            <input type="hidden" name="_captcha" value="false" />

            <button type="submit" class="font-semibold text-sm cursor-pointer w-full bg-[#484E53] dark:bg-white text-white dark:text-black px-4 py-3 rounded-md transition hover:bg-[#4FC3F7]">
                Get In Touch
            </button>
        </form>
    </div>
</template>