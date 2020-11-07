import Login from "pages/Login";
import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Shop from "./components/Shop";

const App: FC = () => (
  <Router>
    <Switch>
      <Route path="/shop/" component={Shop} />
      <Route path="/" exact component={Login} />
    </Switch>
  </Router>
);

export default App;
