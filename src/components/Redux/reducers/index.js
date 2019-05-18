import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import searchMenu from "./searchMenu";
import login from "./login";
import profile from "./profile";
import sign from "./sign";
import signup from "./signup";
import recipe from './recipe';
import restaurant from './restaurant';

const rootReducers = history =>
  combineReducers({
    router: connectRouter(history),
    searchMenu,
    login,
    profile,
    sign,
    signup,
    recipe,
    restaurant
  });

export default rootReducers;
