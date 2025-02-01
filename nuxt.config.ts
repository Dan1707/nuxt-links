// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL,
    },
  },

  css: ["~/assets/main.css"],
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss", "@nuxt/icon"],
});
