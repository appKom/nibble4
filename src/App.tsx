import LoginPage from "pages/LoginPage";
import StorePage from "pages/StorePage";
import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: FC = () => (
  <Router>
    <Switch>
      <Route path="/shop/" component={StorePage} />
      <Route path="/" component={LoginPage} />
      <Route component={LoginPage} />
    </Switch>
  </Router>
);

export default App;
