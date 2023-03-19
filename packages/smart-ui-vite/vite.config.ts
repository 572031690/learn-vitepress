/// <reference types="vitest"/>
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";
import dts from "vite-plugin-dts";

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
    assetFileNames: `assets/[name].[ext]`, // 去掉生成文件的 hash 值
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
    dts({
      entryRoot: "./src",
      outputDir: ["../SmartUI/es/src", "../SmartUI/lib/src"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "./tsconfig.json",
    }),
  ],
  build: {
    rollupOptions,
    minify: "terser",
    sourcemap: true,
    cssCodeSplit: true, // 独立输出 css 样式
    lib: {
      entry: "./src/index.ts",
      name: "SmartUI",
      fileName: "smart-ui",
      formats: ["es", "umd", "iife"],
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
