import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
// import Auth from "./views/user";

const Auth = () => {
  return <h2>Auth Route</h2>;
};

const App = () => {
  let { path, url } = useRouteMatch();

  return (
    <div style={{ marginTop: "200px", marginLeft: "200px" }}>
      <h2>App</h2>
      <ul>
        <li>
          <Link to={`${url}/auth`}>Auth</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route exact path={`${path}/auth`} component={Auth} />
      </Switch>
    </div>
  );
};

export default App;
