import { useState } from "react";
/** HOOK creacion del estado y captura de eventos de boton
 *
 * ___________________________________________________________
 */
export const UseCheckAtributos = (initialState = true) => {
  const [showAl_Di, setShowAl_Di] = useState(initialState); //open/cierre de alert de los datos
  const [showAl_Po, setShowAl_Po] = useState(initialState); //open/cierre de alert de los datos
  const [showAl_Lo, setShowAl_Lo] = useState(initialState); //open/cierre de alert de los datos
  const [valueDireccion, setValueDireccion] = useState(false); //lanzamos el estado inicial del select combo a NADA
  const [valuePoblacion, setValuePoblacion] = useState(false); //lanzamos el estado inicial del select combo a NADA
  const [valueLocalidad, setValueLocalidad] = useState(false); //lanzamos el estado inicial del select combo a NADA

  //cerramos el mensaje direccion
  const resetDireccion = () => {
    setShowAl_Di(false); //colocamos el estado a false
    setValueDireccion(false);
  };

  //cerramos el mensaje poblacion
  const resetPoblacion = () => {
    setShowAl_Po(false); //colocamos el estado a false
    setValuePoblacion(false);
  };

  //cerramos el mensaje localidad
  const resetLocalidad = () => {
    setShowAl_Lo(false); //colocamos el estado a false
    setValueLocalidad(false);
  };

  const capturaCheck1 = (e) => {
    setShowAl_Di(initialState); //devolvemos el estado a true (initial) en la misma funcion de captura

    if (valueDireccion === true) {
      setValueDireccion(false);
    } else {
      setValueDireccion(true);
    }
  };

  const capturaCheck2 = (e) => {
    setShowAl_Po(initialState); //devolvemos el estado a true (initial) en la misma funcion de captura
    if (valuePoblacion === true) {
      setValuePoblacion(false);
    } else {
      setValuePoblacion(true);
    }
  };

  const capturaCheck3 = (e) => {
    setShowAl_Lo(initialState); //devolvemos el estado a true (initial) en la misma funcion de captura
    if (valueLocalidad === true) {
      setValueLocalidad(false);
    } else {
      setValueLocalidad(true);
    }
  };

  return {
    showAl_Di,
    showAl_Po,
    showAl_Lo,
    valueDireccion,
    valuePoblacion,
    valueLocalidad,
    resetDireccion,
    resetPoblacion,
    resetLocalidad,
    capturaCheck1,
    capturaCheck2,
    capturaCheck3,
  };
};
