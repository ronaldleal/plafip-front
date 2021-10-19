import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppNav from "./AppNav";
import AppHome from "./AppHome";
import AppFotter from "./AppFooter";
import AppLogin from "./AppLogin";
import AppForgettenPassword from "./AppForgottenPassword";
import AppSignUp from "./AppSignUp";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNav />
        <Switch>
          <Route path="/" component={AppHome} exact />
          <Route path="/home" component={AppHome} exact />
          <Route path="/login" component={AppLogin} exact />
          <Route path="/recordar-clave" component={AppForgettenPassword} exact />
          <Route path="/registrar-usuario" component={AppSignUp} exact />
        </Switch>
        <AppFotter />
      </div>
    </BrowserRouter>
  );
}

export default App;
