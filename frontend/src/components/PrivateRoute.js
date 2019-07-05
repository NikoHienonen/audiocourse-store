import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.getItem("loggedIn") === "True" ?  (
          <Component {...props} />
        ): (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}