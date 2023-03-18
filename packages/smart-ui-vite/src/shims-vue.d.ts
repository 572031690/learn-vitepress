/*
 * @Author: mjh
 * @Date: 2023-03-13 00:03:31
 * @LastEditors: mjh
 * @LastEditTime: 2023-03-13 00:03:39
 * @Description:
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
