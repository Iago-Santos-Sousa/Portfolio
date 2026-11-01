import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  base: "/Portfolio/",
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      svg: { multipass: true },
      png: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 60 },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
