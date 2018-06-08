import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Main from "./components/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Main />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
