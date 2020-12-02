import { combineReducers } from "redux";
import users from "./users";
import secrets from "./secrets";

const rootReducer = combineReducers({ users, secrets });

export default rootReducer;
