// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://tailwindcss.com/docs/flex
    '@nuxtjs/tailwindcss',
    // https://v1.image.nuxtjs.org/configuration
    '@nuxt/image-edge',
    // https://nuxt.com/modules/icon
    'nuxt-icon',
    // https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt',
    // https://nuxt.com/modules/lodash
    // Manualy install vue 3 () => I am still not sure why, but find out why
    "nuxt-lodash",
  ],
})
