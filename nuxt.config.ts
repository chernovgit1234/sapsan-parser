// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  fileStorage: {
    mount: "public/files/"
  },
  site: {
    url: 'https://sapsan-parser.ru' // Замените на URL вашего сайта
  },
  modules: [
    'nuxt-file-storage',
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxtjs/seo"
  ],
  fonts: {
  },
  css: ['~/assets/scss/global.scss'],
  app: {
    head: {
      titleTemplate: '%s | Sapsan Парсер'
    }
  }
})