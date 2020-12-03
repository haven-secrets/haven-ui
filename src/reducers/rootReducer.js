import { combineReducers } from "redux";
import users from "./users";
import logs from "./logs";
import secrets from "./secrets";
import projects from "./projects";

const rootReducer = combineReducers({ users, logs, secrets, projects });

export default rootReducer;
