import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import { Home } from "./components/scenes";
//components
import Main from "./components/Main";
import animationStyles from "./animationStyles.less";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Main>
            <Route
              exact
              path
              to="/"
              render={() => <Home animationStyle="fade" />}
            />
            <Route to="/contact" render={() => <div />} />
          </Main>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
