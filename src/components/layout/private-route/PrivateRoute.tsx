import { IUser } from "../../../store/app/appType";
import { RootState } from "../../../store/storeType.d";
import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {}

/**
 * Component to wrap router route to redirect if not authorized
 */
const PrivateRoute = React.memo<PropsWithChildren<PrivateRouteProps>>(
  ({ children, ...rest }) => {
    const user = useSelector<RootState, IUser | undefined>(
      (state) => state.app.user
    );

    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
);

export default PrivateRoute;
