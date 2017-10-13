import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

//components
import Main from "./components/Main";
import BuyOrBrowse from "./components/centerBox/BuyOrBrowse"
import BrowseBox from "./components/centerBox/BrowseBox"
import BuyBox from "./components/centerBox/BuyBox"
import SignIn from "./components/centerBox/SignIn"
import About from "./components/centerBox/About"
import Contact from "./components/centerBox/Contact"

var setBackground = function(){
		$("#main1").addClass("homeBackground");
		console.log($("#main1"));
	}
var removeBackground = function(){
		$("#main1").removeClass("homeBackground");
	}

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="/browse" component={BrowseBox} />
			<Route path="/buy" component={BuyBox} />
			<Route path="/signin" component={SignIn} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<IndexRoute component={BuyOrBrowse} setBackground={setBackground} removeBackground={removeBackground}/>
		</Route>
	</Router>
	);

export default routes;