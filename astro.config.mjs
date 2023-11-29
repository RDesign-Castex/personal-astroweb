import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";


import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tecnodespegue.com",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(),  preact()]
  // Aquí puedes agregar cualquier configuración adicional de Vite si es necesario
  // vite: {
  //   esbuild: {
  //     loader: 'jsx' // Esto establece el loader por defecto para todos los archivos como JSX
  //   },
  // },
});