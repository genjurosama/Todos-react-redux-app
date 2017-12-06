/**
 * Simple action creators for UID operations (pure functions)
 */

export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const SET_TITLE = "SET_TITLE";
export const SET_DESCRIPTION = "SET_DESCRIPTION";
export const EDIT_TITLE = "EDIT_TITLE";
export const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";

export const showModal = function(data) {
  return {
    type: SHOW_MODAL,
    task: data
  };
};

export const hideModal = function() {
  return {
    type: HIDE_MODAL
  };
};

export const setTitle = function(value) {
  return {
    type: SET_TITLE,
    title: value
  };
};

export const setDescription = function(value) {
  return {
    type: SET_DESCRIPTION,
    description: value
  };
};
export const editTitle = function(value) {
  return {
    type: EDIT_TITLE,
    title: value
  };
};

export const editDescription = function(value) {
  return {
    type: EDIT_DESCRIPTION,
    description: value
  };
};
