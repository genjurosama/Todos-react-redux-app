import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import Enzyme, { mount, render } from "enzyme";
import Tasks from "../containers/tasks.jsx";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import Adapter from "enzyme-adapter-react-16";
import mySaga from "../actions/tasksSaga";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import { setTitle, setDescription } from "../actions/ui";
import { fetchTasks } from "../actions/tasks";
const todos = [];

Enzyme.configure({ adapter: new Adapter() });

describe("<Tasks/> end to end Tests", () => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  const mock = new MockAdapter(axios);
  const state = {
    tasksReducer: {
      tasks: []
    },
    uiReducer: {}
  };

  const todos = [
    {
      id: 0,
      title: "todo1",
      description: "nice"
    },
    {
      id: 1,
      title: "todo2",
      description: "nice"
    }
  ];

  beforeAll(() => {
    jest.setTimeout(20000);
    jest.useRealTimers();
    mock.onGet("http://localhost:9001/tasks").reply(200, { tasks: todos });
    mock.onPost("http://localhost:9001/task/create").reply(200);
  });

  it("should fetch from mocked endpoint and update root smart component", done => {
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(mySaga);
    const wrapper = mount(
      <Provider store={store}>
        <Tasks />
      </Provider>
    );
    setTimeout(() => {
      wrapper.update();
      try {
        expect(wrapper.find("Task")).toHaveLength(2);
      } catch (e) {
        console.log(e);
        done.fail();
      }
      done();
    }, 2000);
    jest.runAllTimers();
  });

  it("it should add task and refetch data for root component ", done => {
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(mySaga);
    const wrapper = mount(
      <Provider store={store}>
        <Tasks />
      </Provider>
    );
    const title = "test";
    const description = "testDesc";
    store.dispatch(setTitle(title));
    store.dispatch(setDescription(description));
    todos.push({ id: todos.length, title, description });
    store.dispatch(fetchTasks());
    wrapper.find("Button.addButton").simulate("click");

    setTimeout(() => {
      wrapper.update();
      try {
        expect(wrapper.find("Task")).toHaveLength(3);
      } catch (e) {
        console.log(e);
        done.fail();
      }
      done();
    }, 2000);
    jest.runAllTimers();
  });
});
