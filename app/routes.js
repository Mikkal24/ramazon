import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Home, Browse, Purchase } from "./components/scenes";
//components
import Main from "./components/Main";
import styles from "./animationStyles.less";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => {
            return (
              <Main>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames={{
                      appear: styles.appear,
                      appearActive: styles.appearActive,
                      enter: styles.enter,
                      enterActive: styles.enterActive,
                      enterDone: styles.doneEnter,
                      exit: styles.exit,
                      exitActive: styles.exitActive,
                      exitDone: styles.exitDone
                    }}
                    timeout={1000}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/browse" component={Browse} />
                      <Route path="/purchase" component={Purchase} />
                      <Route render={() => <div>404</div>} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </Main>
            );
          }}
        />
      </Router>
    );
  }
}

export default Routes;
