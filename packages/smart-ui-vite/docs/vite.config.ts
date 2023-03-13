/*
 * @Author: mjh
 * @Date: 2023-03-13 09:14:15
 * @LastEditors: mjh
 * @LastEditTime: 2023-03-13 09:14:23
 * @Description: 
 */
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";

export default defineConfig({
  plugins: [vueJsx(), Unocss()],
});