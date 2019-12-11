import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getObjectCookie, TOKEN_COOKIE } from './app.utils';

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
  const Component = component;

  const tokenCookie = getObjectCookie(TOKEN_COOKIE);
  const hasToken = Boolean(tokenCookie && tokenCookie.token);

  return (
    <Route
      {...rest}
      render={props =>
        hasToken ? 
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