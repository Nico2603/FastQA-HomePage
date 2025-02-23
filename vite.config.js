import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/FastQA-HomePage/", // Asegúrate de usar el nombre del repo
  resolve: {
    extensions: [".js", ".jsx"], // Permite reconocer archivos .jsx correctamente
  },
});
