import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthService } from "../services/auth";

type AuthProps = {
  component: any;
  redirectTo: string;
  path: string;
  [key: string]: any;
};

/**
 * HOC Auth Router
 * @param {AuthProps} param0
 */
const AuthRoute = ({ component, redirectTo, ...rest }: AuthProps) => {
  const authService = new AuthService();
  const Component = component;

  return (
    <Route
      {...rest}
      render={props =>
        authService.isLogged() ? 
        (
          <Component {...props} />
        ) : 
        (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

export default AuthRoute;