import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import axios from "axios";

export const BloqueTiposInmuebles = () => {
  //environements
  //------------------------------------------------------------------------------
  const baseUrl = process.env.REACT_APP_API_URL; //variable de entorno
  const endpoint = "tiposinmueble";
  const url = `${baseUrl}/${endpoint}`; //en desarrollo http://localhost:4000/endpoint definido en el backend
  //------------------------------------------------------------------------------

  //definimos el estado de la consulta
  //------------------------------------------------------------------------------
  const [data, setData] = useState({ tiposInmuebles: [] });

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
      <div>
        {data.tiposInmuebles.map((item) => (
          <Dropdown.Item key={item.id} eventKey={item.id}>
            <i class="fas fa-caret-right"></i> {item.name}
          </Dropdown.Item>
        ))}
      </div>
    </>
  );
};
