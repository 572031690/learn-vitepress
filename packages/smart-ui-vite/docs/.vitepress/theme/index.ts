/*
 * @Author: mjh
 * @Date: 2023-03-13 00:32:41
 * @LastEditors: mjh
 * @LastEditTime: 2023-03-13 09:21:26
 * @Description: 
 */
import Theme from "vitepress/dist/client/theme-default";
import SmartUI from "../../../src/entry";
import Demo from "vitepress-theme-demoblock/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";
import "vitepress-theme-demoblock/theme/styles/index.css";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(SmartUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
};