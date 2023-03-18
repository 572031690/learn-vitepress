/*
 * @Author: mjh
 * @Date: 2023-03-13 09:32:39
 * @LastEditors: mjh
 * @LastEditTime: 2023-03-13 09:32:47
 * @Description:
 */
import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Button from "../button";

describe("button", () => {
  test("mount", () => {
    const wrapper = shallowMount(Button, {
      slots: { default: "Button" },
    });
    expect(wrapper.text()).toBe("Button");
  });
});
describe("color", () => {
  test("default", () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.classes().includes("bg-blue-500")).toBe(true);
  });
});
