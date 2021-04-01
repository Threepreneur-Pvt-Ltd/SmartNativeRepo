import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home";
import App from "./app";

const Routes = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      <Route exact path="/app" component={App} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Suspense>
);

export default Routes;
