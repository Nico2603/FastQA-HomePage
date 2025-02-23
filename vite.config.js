import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/FastQA-HomePage/",  // Asegura que sea el nombre exacto del repo en GitHub
  build: {
    outDir: "docs",           // Generar el build en `docs/`
    emptyOutDir: true,        // Limpia la carpeta antes del build
  },
});