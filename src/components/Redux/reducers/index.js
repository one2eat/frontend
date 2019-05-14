import { combineReducers } from "redux";
import loggedInReducer from "./loggedInReducer";
import signInReducer from './signIn'

const rootReducers = combineReducers({
  loggedInReducer,
  signInReducer
});

export default rootReducers;
