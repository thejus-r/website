// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";

import path from "path"


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    base: "",
    resolve: {
      alias: {
        "@layouts" : path.resolve(path.dirname(""), "./src/layouts"),
        "@components" : path.resolve(path.dirname(""), "./src/components"),
        "@styles" : path.resolve(path.dirname(""), "./src/styles"),
        "@assets" : path.resolve(path.dirname(""), "./src/assets"),
        "@config" : path.resolve(path.dirname(""), "./src/config"),
      }
    }
  },
  integrations: [alpinejs()],
});