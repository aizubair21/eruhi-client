// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css', '~/assets/css/user/style.css', '~/assets/css/user/bootstrap.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },


  runtimeConfig: {

    // private property 
    apiSecret: "",

    // public property 
    public: {
      baseApi: 'https://eruhi.gorombazar.com/web/api',
      testApi: 'http://eruhi.local/web/api',
    }
  }
})
