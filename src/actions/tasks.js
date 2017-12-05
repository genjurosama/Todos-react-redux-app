export const TASKS_FETCH_REQUESTED = "TASKS_FETCH_REQUESTED";
export const TASKS_FETCH_SUCCEEDED = "TASKS_FETCH_SUCCEEDED";
export const TASKS_FETCH_FAILED = "TASKS_FETCH_FAILED";
export const TASK_ADD = "TASK_ADD";
export const TASK_ADD_SUCCEEDED = "TASK_ADD_SUCCEEDED";
export const TASK_ADD_FAILED = "TASK_ADD_FAILED";
export const TASK_DELETE = "TASK_DELETE";
export const TASK_DELETE_SUCCEEDED = "TASK_DELETE_SUCCEEDED";
export const TASK_DELETE_FAILED = "TASK_DELETE_FAILED";
export const TASK_EDIT = "TASK_EDIT";
export const TASK_EDIT_SUCCEEDED = "TASK_EDIT_SUCCEEDED";
export const TASK_EDIT_FAILED = "TASK_EDIT_FAILED";

export const fetchTasks = function() {
  return {
    type: TASKS_FETCH_REQUESTED
  };
};

export const fetchProductsSucceeded = function(tasks) {
  return {
    type: TASKS_FETCH_SUCCEEDED,
    tasks: tasks
  };
};

export const fetchProductsFailed = function(message) {
  return {
    type: TASKS_FETCH_FAILED,
    payload: message
  };
};

export const addTask = function(task) {
  console.log('ading :',task);
  return {
    type: TASK_ADD,
    task: task
  };
};

export const taskAddSucceeded = function(products) {
  return {
    type: TASK_ADD_SUCCEEDED
  };
};

export const taskAddFailed = function(message) {
  return {
    type: TASK_ADD_FAILED,
    payload: message
  };
};

export const deleteTask = function(id) {
  return {
    type: TASK_DELETE,
    id:id
  };
};

export const taskDeleteSucceeded = function() {
  return {
    type: TASK_DELETE_SUCCEEDED
  };
};

export const taskDeleteFailed = function(message) {
  return {
    type: TASK_ADD_FAILED,
    payload: message
  };
};


export const editTask = function(id,title,description) {
  return {
    type: TASK_EDIT,
    id:id,
    task:{title,description}
  };
};

export const taskEditSucceeded = function() {
  return {
    type: TASK_EDIT_SUCCEEDED
  };
};

export const taskEditFailed = function(message) {
  return {
    type: TASK_EDIT_FAILED,
    payload: message
  };
};