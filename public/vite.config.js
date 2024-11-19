import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Ouvre automatiquement le navigateur
  },
  publicDir: "public", // Dossier pour les ressources publiques (favicon, index.html)
});