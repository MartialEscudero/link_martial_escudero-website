<script setup>
const socialMedia = [{
    "icon": "link-outline",
    "title": "Site Web",
    "description": "Venez découvrir mon portfolio personnel.",
    "color": "#93c5fd",
    "url": "https://www.martialescudero.com",
}, {
    "icon": "document-outline",
    "title": "Mon CV",
    "description": "Retrouvez mon CV en PDF.",
    "color": "#FE7A56",
    "url": import.meta.env.VITE_CV_URL,
}, {
    "icon": "logo-github",
    "title": "GitHub",
    "description": "Venez découvrir mes projets.",
    "color": "#FFFFFF",
    "url": "https://github.com/MartialEscudero",
}, {
    "icon": "logo-linkedin",
    "title": "LinkedIn",
    "description": "Retrouvez mon profil LinkedIn.",
    "color": "#5476F1",
    "url": "https://www.linkedin.com/in/martial-escudero",
}]
</script>

<template>
    <div class="flex flex-col items-center">
        <a href="https://www.martialescudero.com" target="_blank">
            <img data-aos="fade" class="mx-auto w-28 md:w-40 lg:w-52 xl:my-28 mt-10 mb-10 md:mb-16" src="./assets/img/icon.png" />
        </a>
        <div data-aos="fade" class="mx-auto grid gap-10 md:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 mb-20">
            <div v-for="social in socialMedia">
                <a :href="social.url" target="_blank">
                    <div class="card flex flex-col items-start text-white transform transition duration-300 hover:scale-105 max-w-xs h-48" :style="`border: 3px solid ${social.color}`">
                        <ion-icon class="mb-2 md:mb-4" :name="social.icon"/>
                        <h1 class="text-2xl">{{ social.title }}</h1>
                        <p class="text-base">{{ social.description }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
ion-icon {
    transition: 0.3s;
    font-size: 50px;
}

body {
    background-color: #0e0e0e;
    font-family: "Poppins", sans-serif;
}

.card {
    background-color: #202020;
    border: 3px solid white;
    border-radius: 15px;
    padding: 20px;
    cursor: pointer;
}
</style>