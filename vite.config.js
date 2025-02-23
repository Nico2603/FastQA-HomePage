import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/FastQA-HomePage/", // Asegurar que sea el nombre exacto del repo en GitHub
  build: {
    outDir: "dist",
    emptyOutDir: true, // Limpia `dist/` antes de cada build
  },
});
