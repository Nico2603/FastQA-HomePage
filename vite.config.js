import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/FastQA-HomePage/", // Asegurar que es el nombre exacto del repo
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"], // Añadir soporte para .jsx
  },
  build: {
    outDir: "dist",
  },
});
