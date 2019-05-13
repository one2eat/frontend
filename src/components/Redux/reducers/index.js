import { combineReducers } from "redux";
import loggedInReducer from "./loggedInReducer";

const rootReducers = combineReducers({
  loggedInReducer
});

export default rootReducers;
