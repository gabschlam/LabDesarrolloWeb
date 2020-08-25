import React from "react";
import Home from "./Pages/Home";
import User from "./Pages/User";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}
