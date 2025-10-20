import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    reporters: [`verbose`],
    environment: "jsdom",
    setupFiles: ["src/setupTests.ts"],
    coverage: {
      reportsDirectory: "./coverage",
      exclude: [
        "src/main.tsx",
        "src/vite-env.d.ts",
        "vite.config.ts",
        "**/types.ts",
      ],
      provider: "v8",
      reporter: ["lcov", "text", "html", "clover", "json"],
      include: ["**/*.ts", "**/*.tsx"],
    },
  },
  plugins: [react(), tailwindcss()],
});
