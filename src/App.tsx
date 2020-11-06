import React, { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Login";
import Shop from "./Shop";

const App: FC = () => (
  <Router>
    <div className="App">
      <Route path="/shop/" component={Shop} />
      <Route path="/login/" component={Login} />
    </div>
  </Router>
);

export default App;
