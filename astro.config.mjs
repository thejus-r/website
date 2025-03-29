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
        '@components': path.resolve("./src/components"),
        '@assets': path.resolve( "./src/assets"),
        '@layouts': path.resolve( "./src/layouts"),
        '@config': path.resolve( "./src/config"),
        '@types': path.resolve( "./src/types"),
        '@styles': path.resolve( "./src/styles"),
      }
    }
  },

  integrations: [alpinejs()],
  adapter: vercel(),
});