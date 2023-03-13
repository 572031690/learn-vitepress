/*
 * @Author: mjh
 * @Date: 2023-03-13 00:17:27
 * @LastEditors: mjh
 * @LastEditTime: 2023-03-13 09:31:46
 * @Description: 
 */
import { defineComponent, PropType } from "vue";
import "uno.css";

type IColor = "red" | "gray" | "yellow";
type IIcon = "search" | "edit" | "check";
const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  icon: {
    type: String as PropType<IIcon>,
  },
};
export default defineComponent({
  name: "UButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`py-2 bg-${props.color}-500 hover:bg-${props.color}-700 border-none`}
      >
        {!props.icon ? "" : <i class={`i-ic-baseline-${props.icon} p-3`}></i>}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});