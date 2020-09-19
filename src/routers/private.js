import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
// import { AuthContext } from "../context/authContext";
// import Nav from "../container/layouts/nav";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const { isAuthenticated } = useContext(AuthContext);
  const isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <Component {...props} />
          </>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
