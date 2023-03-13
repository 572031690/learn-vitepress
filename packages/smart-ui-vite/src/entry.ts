/*
 * @Author: mjh
 * @Date: 2023-03-13 00:07:00
 * @LastEditors: mjh
 * @LastEditTime: 2023-03-13 00:24:06
 * @Description: 
 */
import { App } from "vue";
import RenderButton from "./button/render-button";
import SFCButton from "./button/sfc-button.vue";
import TSXButton from "./button/tsx-button";
import indexButton from "./button";

export { RenderButton, SFCButton, TSXButton };

export default {
  install(app: App): void {
    app.component(RenderButton.name, RenderButton);
    app.component(SFCButton.name, SFCButton);
    app.component(TSXButton.name, TSXButton);
    app.component(indexButton.name, indexButton);
  },
};