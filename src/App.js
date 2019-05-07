import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/HomePage";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={SignIn} />
    </div>
  );
};

export default App;
