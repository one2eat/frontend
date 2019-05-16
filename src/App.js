import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore, {
  history
} from "./components/Redux/store/configureStore";
import { ConnectedRouter } from "connected-react-router";

import Home from "./components/HomePage";
import SignIn from "./components/SignIn";
import DashboardIndex from "./components/Dashboard";
import Recipes from "./components/RecipesPage";
import Restaurants from "./components/RestaurantsPage";

const store = configureStore(/* provide initial state if any */);

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/dashboard" exact component={DashboardIndex} />
          <Route path="/recipes" exact component={Recipes} />∏
          <Route path="/restaurants" exact component={Restaurants} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
