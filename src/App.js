import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
    </div>
  );
};

export default App;
