import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "tailwindcss"],
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});