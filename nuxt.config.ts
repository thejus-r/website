import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      title: "Thejus Rajendran",
      meta: [
        {
          name: "description",
          content: "Software Engineer",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
    rootAttrs: {
      class: "grow flex flex-col w-full min-h-screen",
    },
  },
  compatibilityDate: "latest",
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/fonts", "@nuxt/content", "@nuxtjs/mdc"],
  fonts: {
    defaults: {
      weights: ["300 800"],
      styles: ["normal", "italic"],
      subsets: ["latin"],
    },
  },
});
