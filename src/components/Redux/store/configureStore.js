import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";

import rootReducers from "../reducers/index";

export const history = createBrowserHistory();

const composeEnhancers =
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(routerMiddleware(history), thunk)
  // other store enhancers if any
);

export default function configureStore(preloadedState) {
  const store = createStore(rootReducers(history), preloadedState, enhancer);
  return store;
}
