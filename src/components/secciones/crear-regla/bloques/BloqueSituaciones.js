import React from "react";

export const BloqueSituaciones = () => {
  return (
    <div className="row bloque__situaciones  mb-3">
      <div className="col-md-12  m-0 p-0">
        <div className="row">
          <div className="col-md-12  m-0 p-0">
            <h4>SITUACIONES</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 bloque__back m-0 p-0">
            <div className="row">
              <div className="col-md-6">
                <div className="bloque__plan">
                  <h5>Seleccione para planificar</h5>
                </div>
              </div>
              <div className="col-md-6 bloque_linea">
                <div className="bloque__planmin">
                  <h5>Añada campos para construir</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
