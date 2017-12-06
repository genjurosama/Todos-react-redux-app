import { Task } from "./task.jsx";
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("Task component renders the text of the todo", () => {
  const task = { id: 1, title: "test", description: "work home" };
  const wrapper = mount(<Task task={task} />);
  const title = wrapper.find(".todoTitle");
  const desc = wrapper.find(".todoDesc");
  expect(title.text()).toBe("test");
  expect(desc.text()).toBe("work home");
});
