import UButton from "./button";
import { createApp } from "vue/dist/vue.esm-bundler.js";

createApp({
  template: `<div>
        <UButton color="red" icon="search">红色按钮</UButton>
        <UButton color="gray" icon="edit">绿色按钮</UButton>
        <UButton color="yellow" icon="check">绿色按钮</UButton>
    </div>`,
})
  .component(UButton.name, UButton)
  .mount("#app");