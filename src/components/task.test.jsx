/**
 * A simple test to check if the Task Component renders correctly
 */
import { Task } from "./task.jsx";
import React from "react";
import Enzyme, {mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("Task component renders the text of the todo", () => {
  const titleValue = "test";
  const descriptionValue = "testDesc";
  const task = { id: 1, title: titleValue, description:descriptionValue};
  const wrapper = mount(<Task task={task} />);
  const title = wrapper.find(".todoTitle");
  const desc = wrapper.find(".todoDesc");
  expect(title.text()).toBe(titleValue);
  expect(desc.text()).toBe(descriptionValue);
});
