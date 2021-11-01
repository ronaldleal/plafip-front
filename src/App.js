import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AppFotter from "./components/pages/AppFooter";
import AppHome from "./components/pages/AppHome";
import AppLogin from "./components/pages/AppLogin";
import AppLogout from "./components/pages/AppLogout";
import AppMovements from "./components/pages/AppMovements";
import AppNav from "./components/pages/AppNav";
import AppSignUp from "./components/pages/AppSignUp";
import ROUTES from "./routes";

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
          <Route path={ROUTES.MOVIMIENTOS} component={AppMovements} exact />
        </Switch>
        <AppFotter />
      </div>
    </BrowserRouter>
  );
}

export default App;
