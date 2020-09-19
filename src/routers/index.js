import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

//components
import PrivateRoute from "./private";
import ListSubmissions from "../components/ListSubmission";
import { Home } from "../App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/login"
        component={() => <h1 style={{ color: "white" }}> Login admin </h1>}
      />
      <Route
        exact
        path="/admin-YsfbX7KN8XMzjFzpk7I"
        component={ListSubmissions}
      />
      <Route
        exact
        path="/admin-BFQqH292bXKDTqaOacMo"
        component={ListSubmissions}
      />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
