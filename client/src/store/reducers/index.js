import { combineReducers } from "redux";
import global from "./global";
import users from "./users";
import messages from "./messages";

const appReducer = combineReducers({
  global,
  users,
  messages
});

export default appReducer;
