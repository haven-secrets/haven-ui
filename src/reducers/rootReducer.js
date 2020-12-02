import { combineReducers } from "redux";
import users from "./users";
import logs from "./logs";
import secrets from "./secrets";

const rootReducer = combineReducers({ users, logs, secrets });

export default rootReducer;
