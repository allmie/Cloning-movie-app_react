import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Detail from "Routes/Detail";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

export default () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/tv' component={TV}></Route>
      <Route path='/tv/popular' render={() => <h1>Popular</h1>}></Route>
      <Route path='/search' component={Search}></Route>
      <Route path='/detail' component={Detail}></Route>
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
);
