import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { NavBar } from "../components/comunes/NavBar";
import { CrearReglaScreen } from "../components/secciones/crear-regla/CrearReglaScreen";

import { HomeScreen } from "../components/secciones/HomeScreen";
import { ListadoScreen } from "../components/secciones/listar-reglas/ListadoScreen";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
  //guard de paginas
  const dispatch = useDispatch();

  const { checking, id_persona } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <p>Espera..... {id_persona}</p>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth/login"
            component={AuthRouter}
            isAuthenticated={!!id_persona}
          />
          <PrivateRoute
            exact
            path="/home"
            component={HomeScreen}
            isAuthenticated={!!id_persona}
          />
          <PrivateRoute
            exact
            path="/listado"
            component={ListadoScreen}
            isAuthenticated={!!id_persona}
          />
          <PrivateRoute
            exact
            path="/crear"
            component={CrearReglaScreen}
            isAuthenticated={!!id_persona}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
