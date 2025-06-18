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

    // public property 
    public: {
      apiSecret: "17f4f177db16d4ec4571bb",
      baseApi: 'https://eruhi.gorombazar.com/api',
      assetUrl: 'https://eruhi.gorombazar.com/store',
      testApi: 'http://eruhi.local/web/api',
    }
  }
})
