import { combineReducers } from "redux";
import users from "./users";
import logs from "./logs";
import projectsInfo from "./projectsInfo";
import secrets from "./secrets";

const rootReducer = combineReducers({ users, logs, secrets, projectsInfo });

export default rootReducer;
