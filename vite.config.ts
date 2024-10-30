/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  css: {
    postcss: {
      plugins: [autoprefixer]
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    reporters: ["json", "default", "html", "verbose", "junit"],
    outputFile: {
      junit: "./reports/junit-report.xml",
      json: "./reports/json-report.json",
      html: "./reports/html-report.html",
    },
  },
});
