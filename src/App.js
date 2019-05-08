import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/HomePage";
import SignIn from "./components/SignIn";
import Recipes from "./components/Recipes";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/recipes" exact component={Recipes} />
    </div>
  );
};

export default App;
