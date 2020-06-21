import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "features/home/Home";
import Main from "features/main/Main";

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/main" exact component={Main} />
      </Switch>
    </Router>
  );
};
