import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppNav from "./AppNav";
import AppHome from "./AppHome";
import AppFotter from "./AppFooter";
import AppLogin from "./AppLogin";
import AppSignUp from "./AppSignUp";
import "./App.css";
import ROUTES from "./routes";
import AppLogout from "./AppLogout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNav />
        <Switch>
          <Route path={ROUTES.HOME} component={AppHome} exact />
          <Route path={ROUTES.HOME} component={AppHome} exact />
          <Route path={ROUTES.LOGIN} component={AppLogin} exact />
          <Route path={ROUTES.SIGN_UP} component={AppSignUp} exact />
          <Route path={ROUTES.LOGOUT} component={AppLogout} exact />
        </Switch>
        <AppFotter />
      </div>
    </BrowserRouter>
  );
}

export default App;
