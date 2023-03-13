/*
 * @Author: mjh
 * @Date: 2023-03-13 00:01:00
 * @LastEditors: mjh
 * @LastEditTime: 2023-03-13 00:14:26
 * @Description: 
 */
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "RenderButton",
  render() {
    return h("button", null, "RenderButton");
  },
});