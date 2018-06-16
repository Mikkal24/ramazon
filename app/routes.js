import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import { Home, Browse, Purchase } from "./components/scenes";
//components
import Main from "./components/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/browse" component={Browse} />
            <Route path="/purchase/:location" component={Purchase} />
            <Route render={() => <div>404</div>} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

export default Routes;
