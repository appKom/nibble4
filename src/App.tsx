import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Shop from "./components/Shop";

const App: FC = () => (
  <Router>
    <Switch>
      <div className="App">
        <Route path="/shop/" component={Shop} />
        <Route path="/" exact component={Login} />
      </div>
    </Switch>
  </Router>
);

export default App;
