import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthService } from '../services/auth';

type Props = {
  redirectTo: string;
  path: string;
};

/**
 * HOC Auth Router
 * @param {func} component
 * @param {bool} authenticated
 * @param {strig} redirectTo
 */
const AuthRoute = ({ component, redirectTo, ...rest }: any) => {
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