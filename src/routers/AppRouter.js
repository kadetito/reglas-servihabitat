import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { NavBar } from "../components/comunes/NavBar";
import { CrearReglaScreen } from "../components/secciones/crear-regla/CrearReglaScreen";

import { HomeScreen } from "../components/secciones/HomeScreen";
import { ListadoScreen } from "../components/secciones/listar-reglas/ListadoScreen";
import { AuthRouter } from "./AuthRouter";
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <main>
          <Switch>
            <Route path="/auth" component={AuthRouter} />
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/listado" component={ListadoScreen} />
            <Route exact path="/crear" component={CrearReglaScreen} />
            <Redirect to="/auth/login" />
          </Switch>
        </main>
      </div>
    </Router>
  );
};
