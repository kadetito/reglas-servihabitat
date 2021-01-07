import { useState } from "react";
/** HOOK creacion del estado y captura de eventos de boton
 *
 * ___________________________________________________________
 */

export const UseCheckAtributos = (initialState = true, estadoInicial = 0) => {
  const [show, setShow] = useState(initialState); //open/cierre de alert de los datos
  const [showAl_Di, setShowAl_Di] = useState(false); //open/cierre de alert de los datos
  const [showAl_Po, setShowAl_Po] = useState(initialState); //open/cierre de alert de los datos
  const [showAl_Lo, setShowAl_Lo] = useState(initialState); //open/cierre de alert de los datos

  const [valueParametro, setValueParametro] = useState(estadoInicial); //lanzamos el estado inicial  a NADA

  const [valueIdBoton, setValueIdBoton] = useState(true); //lanzamos el estado inicial del select combo a NADA

  const [valueDireccion, setValueDireccion] = useState(false); //lanzamos el estado inicial del select combo a NADA
  const [valuePoblacion, setValuePoblacion] = useState(false); //lanzamos el estado inicial del select combo a NADA
  const [valueLocalidad, setValueLocalidad] = useState(false); //lanzamos el estado inicial del select combo a NADA

  //cerramos el mensaje
  const reset = () => {
    setShow(false); //colocamos el estado a false
    setValueIdBoton(false);
  };

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
    console.log(showAl_Di);
    setShowAl_Di(initialState); //devolvemos el estado a true (initial) en la misma funcion de captura

    if (valueIdBoton === true) {
      setValueIdBoton(false);
    } else {
      setValueIdBoton(true);
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

  /*************** CAPTURA DEL EVENTO Y EL PARAMETRO DEL BOTON ********************** */
  const capturaCheck = (parametro) => {
    if (valueIdBoton === false) {
      //valor en false
      setValueParametro(estadoInicial);
      setValueIdBoton(true);
      setShow(false);
      console.log(valueParametro);
    } else {
      //valor en true
      setValueIdBoton(false);
      setValueParametro(parametro);
      setShow(true);
      console.log(valueParametro);
    }

    // if (valueIdBoton === false) {
    //   //valor en false
    //   setValueIdBoton(true);
    //   parametro = 0;
    //   setShow(false);
    //   console.log(valueParametro);
    // } else {
    //   //valor en true

    //   setValueIdBoton(false);
    //   // setValueParametro(parametro);
    //   setShow(true);
    //   console.log(valueParametro);
    // }
  };
  /******************************************************************************* */

  return {
    show,
    showAl_Di,
    showAl_Po,
    showAl_Lo,
    valueIdBoton,
    valueParametro,
    valueDireccion,
    valuePoblacion,
    valueLocalidad,
    reset,
    resetDireccion,
    resetPoblacion,
    resetLocalidad,
    capturaCheck,
    capturaCheck1,
    capturaCheck2,
    capturaCheck3,
  };
};
