import { Suspense, lazy } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import routes from "./routes";

const DashboardPage = lazy(() => import("~/pages/Dashboard"));
const NewUserPage = lazy(() => import("~/pages/NewUser"));

const Router = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Switch>
          <Route exact path={routes.dashboard} component={DashboardPage} />
          <Route exact path={routes.newUser} component={NewUserPage} />
          <Route
            exact
            path={routes.history}
            component={() => <div>History</div>}
          />
          <Route exact path="*">
            <Redirect to={routes.dashboard} />
          </Route>
        </Switch>
      </Suspense>
    </HashRouter>
  );
};

export default Router;
