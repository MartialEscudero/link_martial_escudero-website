<script>
export default {
    data() {
        return {
            socialsTab: [],
        }
    },

    methods: {
        async socialCreated() {
            const response = await fetch("https://strapi.martialescudero.com/api/links?filters[ShowIt][$eq]=true&sort=id");
            const dataSocial = await response.json();

            dataSocial.data.forEach((element) => {
                this.socialsTab.push({
                    title: element.Title,
                    description: element.attributes.Description,
                    url: element.attributes.Url,
                    borderColor:
                        "border: 3px solid " +
                        element.attributes.Color,
                    styleColor:
                        "color :" + element.attributes.Color,
                    icon: element.attributes.Icon,
                });
            });
        },
    },

    mounted() {
        this.socialCreated();
    }
}
</script>

<template>
    <div class="flex flex-col items-center">
        <div>
            <a href="https://www.martialescudero.com" target="_blank">
                <img data-aos="fade" class="mx-auto w-28 md:w-40 lg:w-52 xl:my-28 mt-10 mb-10 md:mb-16" src="./assets/img/icon.png" />
            </a>
            <div data-aos="fade" class="mx-auto grid gap-10 md:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 mb-20">
                <div v-for="social in socialsTab">
                    <a :href="social.url" target="_blank">
                        <div class="card flex items-center text-white transform transition duration-300 hover:scale-90 max-w-xs h-48" :style="social.borderColor">
                            <div>
                                <ion-icon class="mb-2 md:mb-4" :name="social.icon"/>
                                <h1 class="text-2xl">{{ social.title }}</h1>
                                <p class="text-base">
                                    {{ social.description }}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>