import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { publicRoutes } from "./layout";

const PublicRoutes = (route: any) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props: any) => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

class Root extends React.Component<any> {
  render() {
    return (
      <Switch>
        {publicRoutes &&
          publicRoutes.map((route: any, i) => (
            <PublicRoutes key={i} {...route} />
          ))}
      </Switch>
    );
  }
}

export default Root;
