// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import path from "path";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, "./src/components"),
        '@assets': path.resolve(__dirname, "./src/assets"),
        '@layouts': path.resolve(__dirname, "./src/layouts"),
        '@config': path.resolve(__dirname, "./src/config"),
        '@types': path.resolve(__dirname, "./src/types"),
        '@styles': path.resolve(__dirname, "./src/styles"),
      }
    }
  },

  integrations: [alpinejs()],
  adapter: vercel(),
});