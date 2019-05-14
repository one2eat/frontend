import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import loggedInReducer from "./loggedInReducer";
import loginReducer from './logInReducer'

const rootReducers = (history) => combineReducers({
  loggedInReducer,
  loginReducer,
  router: connectRouter(history),
});

export default rootReducers;
