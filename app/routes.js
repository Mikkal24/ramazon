import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Main from "./components/Main";
import BuyOrBrowse from "./components/centerBox/BuyOrBrowse";
import BrowseBox from "./components/centerBox/BrowseBox";
import BuyBox from "./components/centerBox/BuyBox";
import SignIn from "./components/centerBox/SignIn";
import About from "./components/centerBox/About";
import Contact from "./components/centerBox/Contact";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Main>
            <Route exact path="/" component={BuyOrBrowse} />
            <Route exact path="/browse" component={BrowseBox} />
            <Route exact path="/buy" component={BuyBox} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Main>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
