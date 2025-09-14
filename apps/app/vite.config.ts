import react from "@vitejs/plugin-react-swc";

import path from "path";
import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";
import compression from "vite-plugin-compression2";
import tsconfigPaths from "vite-tsconfig-paths";

import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    analyzer({ analyzerMode: "static" }),
    compression({
      algorithms: ["gzip"], // Используем Gzip
      threshold: 1024, // Сжимаем файлы больше 1KB
      deleteOriginalAssets: false, // Сохраняем исходные файлы
    }),
  ],
  base:"/cv/",
  envDir: path.resolve(__dirname, "node_modules", "@cv", "env"),
});
