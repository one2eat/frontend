import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/HomePage";
import SignIn from "./components/SignIn";
import Recipes from "./components/RecipesPage";
import IndexLoggedIn from "./components/LoggedInFrontPage";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/recipes" exact component={Recipes} />
      <Route path="/logged-in" exact component={IndexLoggedIn} />
    </div>
  );
};

export default App;
