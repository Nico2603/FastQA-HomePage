import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/FastQA-HomePage/",  // Asegura que sea el nombre exacto del repo en GitHub
  build: {
    outDir: "docs",           // GitHub Pages solo permite /docs
    emptyOutDir: true,        // Limpia "docs/" antes de cada build
  },
});
