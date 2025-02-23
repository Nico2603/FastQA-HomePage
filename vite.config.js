import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/FastQA-HomePage/", // Asegurar que sea el nombre exacto del repo
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"], // Soporte para .jsx
  },
  build: {
    outDir: "dist", // Genera archivos en la carpeta dist
  },
});
