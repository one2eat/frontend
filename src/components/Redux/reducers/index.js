import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import dashboard from "./dashboard";
import login from "./login";
import profile from "./profile";
import sign from "./sign";

const rootReducers = history =>
  combineReducers({
    router: connectRouter(history),
    dashboard,
    login,
    profile,
    sign
  });

export default rootReducers;
