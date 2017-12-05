import { combineReducers } from "redux";
import { tasksReducer } from "./tasks";
import { uiReducer } from "./ui";

//Pattern of precombining all reducers to keep the store init cleaner
export default combineReducers({ tasksReducer, uiReducer });
