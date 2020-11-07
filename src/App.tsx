import LoginPage from "pages/LoginPage";
import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Shop from "./components/Shop";

const App: FC = () => (
  <Router>
    <Switch>
      <Route path="/shop/" component={Shop} />
      <Route path="/" component={LoginPage} />
      <Route component={LoginPage} />
    </Switch>
  </Router>
);

export default App;
