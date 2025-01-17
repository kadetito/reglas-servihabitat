import { useState } from "react";
/** HOOK creacion del estado y captura del evento del select combo
 *  { valueTipoInmueble }
 * ___________________________________________________________
 */
export const useTipoInmueble = (initialState = true) => {
  const [showAl_Ti, setShowAl_Ti] = useState(initialState); //open/cierre de alert de los datos
  const [valueTipoInmueble, setValueTipoInmueble] = useState(""); //lanzamos el estado inicial del select combo a NADA
  const [showQueTi, setShowQueTi] = useState(initialState); //que tipo de atributos segun tipo de inmueble
  //cerramos el mensaje
  const reset = () => {
    setShowAl_Ti(false); //colocamos el estado a false
    setShowQueTi(false); //colocamos el estado a false
  };

  const capturaSelect = (e) => {
    setShowAl_Ti(initialState); //devolvemos el estado a true (initial) en la misma funcion de captura
    setShowQueTi(initialState); //devolvemos el estado a true (initial) en la misma funcion de captura
    setValueTipoInmueble(e); //capturamos el valor del evento
  };

  return {
    showAl_Ti,
    showQueTi,
    valueTipoInmueble,
    reset,
    capturaSelect,
  };
};
