import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import searchMenu from "./searchMenu";
import login from "./login";
import profile from "./profile";
import sign from "./sign";
import signup from "./signup";

const rootReducers = history =>
  combineReducers({
    router: connectRouter(history),
    searchMenu,
    login,
    profile,
    sign,
    signup
  });

export default rootReducers;
