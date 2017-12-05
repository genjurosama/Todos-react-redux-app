/**
 *This file will hold the Ui reducer to manage various UI events
 */

import {
  SHOW_MODAL,
  HIDE_MODAL,
  SET_VALUE,
  SET_DESCRIPTION,
  SET_TITLE,
  EDIT_DESCRIPTION,
  EDIT_TITLE
} from "../actions/ui";

const initialState = {
  showModal: false,
  task: {}
};

/**
 * Reducer for Ui operations
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} as a new immutated state
 */

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        editedTitle: action.task.title,
        editedDescription: action.task.description,
        id: action.task.id,
        showModal: true
      };
    case HIDE_MODAL:
      return {
        ...state,
        showModal: false
      };
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.description
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.title
      };
    case EDIT_DESCRIPTION:
      return {
        ...state,
        editedDescription: action.description
      };
    case EDIT_TITLE:
      return {
        ...state,
        editedTitle: action.title
      };
    default:
      return state;
  }
};
