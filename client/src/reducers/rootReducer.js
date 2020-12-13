import { combineReducers } from "redux";
import users from "./users";
import logs from "./logs";
import projectsInfo from "./projectsInfo";
import secrets from "./secrets";
import role from "./role";

const rootReducer = combineReducers({ users, logs, secrets, projectsInfo, role });

export default rootReducer;
