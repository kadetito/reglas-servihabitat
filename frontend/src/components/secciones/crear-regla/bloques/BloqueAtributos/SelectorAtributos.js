import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { UseCheckAtributos } from "../../../../../hooks/useCheckAtributos";

export const SelectorAtributos = ({ dataToSelector }) => {
  //constantes del hook de Atributos
  //------------------------------------------------------------------------------
  const {
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
  } = UseCheckAtributos(); //usamos el Check Direccion

  //environements
  //------------------------------------------------------------------------------
  const baseUrl = process.env.REACT_APP_API_URL; //variable de entorno
  const endpoint = `atributos/${dataToSelector}`;
  const url = `${baseUrl}/${endpoint}`; //en desarrollo http://localhost:4000/endpoint definido en el backend
  //------------------------------------------------------------------------------

  //definimos el estado de la consulta
  //------------------------------------------------------------------------------
  const [data, setData] = useState({ atributos: [] });

  //aplicamos effects para hacer el fetch en una funcion asincrona, pasamos token y pers para poder leer del backend
  //------------------------------------------------------------------------------
  useEffect(async () => {
    const token = localStorage.getItem("token") || "";
    const prs = localStorage.getItem("prs") || "";
    const result = await axios({
      method: "GET",
      url: `${url}`,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
        "x-prs": prs,
      },
    });

    setData(result.data);
  });

  return (
    <>
      <div className="row">
        {data.atributos.map((item) => (
          <div className="col" key={item.id}>
            {
              <ToggleButtonGroup key={item.id} type="checkbox">
                <ToggleButton key={item.id}
                  onChange={(parametro) => capturaCheck(item.id, parametro)}
                  name={item.id}
                 
                  className="btn btn-selectores"
                >
                  {item.id}-{item.name} 
                </ToggleButton>
              </ToggleButtonGroup>
            }
          </div>
        ))}
      </div>
    </>
  );
};
