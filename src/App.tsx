import { PrivateRoute, RouterTitle } from "./components/layout";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";

const App = React.memo(() => {
  return (
    <>
      <RouterTitle />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Redirect from="*" to="/login" />
      </Switch>
    </>
  );
});

export default App;
