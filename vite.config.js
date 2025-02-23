import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/FastQA-HomePage/",  // Asegura que este sea el nombre exacto del repo en GitHub
  build: {
    outDir: "dist",            // GitHub Pages leerá desde "dist/"
    emptyOutDir: true,         // Limpia "dist/" antes de cada build
  },
});
