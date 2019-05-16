import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import dashboard from "./dashboard";
import login from "./login";
import profile from "./profile";
import sign from "./sign";
import signup from "./signup";

const rootReducers = history =>
  combineReducers({
    router: connectRouter(history),
    dashboard,
    login,
    profile,
    sign,
    signup
  });

export default rootReducers;
