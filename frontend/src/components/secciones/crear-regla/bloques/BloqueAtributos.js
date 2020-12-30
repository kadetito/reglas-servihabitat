import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { UseCheckAtributos } from "../../../../hooks/useCheckAtributos";
import { useForm } from "../../../../hooks/useForm";
import { Alert } from "react-bootstrap";
import { SelectorAtributos } from "./BloqueAtributos/SelectorAtributos";
import { AlertParametros } from "./BloqueAtributos/AlertParametros";
export const BloqueAtributos = ({ dataFromParent }) => {
  const {
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
  } = UseCheckAtributos(); //usamos el Check Direccion

  return (
    <div className="row">
      <div className="col-md-6 ">
        <div className="bloque__plan">
          <h5>Atributos para {dataFromParent}</h5>

          <div className="card ">
            <div className="row">
              <div className="col-md-12">
                <SelectorAtributos dataToSelector={dataFromParent} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 bloque_linea">
        <div className="bloque__planmin">
          <h5>Añada campos para construir</h5>
          <div className="card">
            <AlertParametros />
            {/* {showAl_Di && valueDireccion ? (
                      <Alert
                        variant="light"
                        onClose={resetDireccion}
                        dismissible
                      >
                        <p>Apunta direccion</p>
                      </Alert>
                    ) : null}

                    {showAl_Po && valuePoblacion ? (
                      <Alert
                        variant="light"
                        onClose={resetPoblacion}
                        dismissible
                      >
                        <p>Apunta poblacion</p>
                      </Alert>
                    ) : null}

                    {showAl_Lo && valueLocalidad ? (
                      <Alert
                        variant="light"
                        onClose={resetLocalidad}
                        dismissible
                      >
                        <p>Apunta Localidad</p>
                      </Alert>
                    ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};
