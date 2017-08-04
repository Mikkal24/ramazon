import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

//components
import Main from "./components/Main";
import BuyOrBrowse from "./components/centerBox/BuyOrBrowse"
import BrowseBox from "./components/centerBox/BrowseBox"
import BuyBox from "./components/centerBox/BuyBox"

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="/browse" component={BrowseBox} />
			<Route path="/buy" component={BuyBox} />
			<IndexRoute component={BuyOrBrowse}/>
		</Route>
	</Router>
	);

export default routes;