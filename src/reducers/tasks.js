/**
 *This file will hold the tasks reducer to manage data fetching state
 */

import {
  TASK_ADD,
  TASK_ADD_FAILED,
  TASK_ADD_SUCCEEDED,
  TASK_DELETE,
  TASK_DELETE_FAILED,
  TASK_DELETE_SUCCEEDED,
  TASKS_FETCH_FAILED,
  TASKS_FETCH_REQUESTED,
  TASKS_FETCH_SUCCEEDED,
  TASK_EDIT_SUCCEEDED
} from "../actions/tasks";

const initialState = {
  tasks: []
};

/**
 * Reducer for tasks operations
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} as a new immutated state
 */

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_FETCH_REQUESTED:
      return Object.assign({}, state, action.payload);
    case TASKS_FETCH_SUCCEEDED:
      return {
        ...state,
        tasks: action.tasks
      };
    case TASKS_FETCH_FAILED:
      return Object.assign({}, state, action.payload);
    case TASK_ADD_SUCCEEDED:
      return {
        ...state
      };
    case TASK_EDIT_SUCCEEDED:
      return {
        ...state
      };
    case TASK_DELETE_SUCCEEDED:
      return {
        ...state
      };
    default:
      return state;
  }
};
