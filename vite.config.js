// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/sitio-web-educativo/", // Ajusta esto según el nombre de tu repositorio
});