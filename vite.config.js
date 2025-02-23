import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/FastQA-HomePage/", // Nombre exacto de tu repo
  build: {
    outDir: "docs",    // <<--- El build final va a esta carpeta
    emptyOutDir: true, // Limpia "docs/" antes de cada build
  },
});
