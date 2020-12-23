import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { UseCheckAtributos } from "../../../../hooks/useCheckAtributos";
import { useForm } from "../../../../hooks/useForm";
import { Alert } from "react-bootstrap";
export const BloqueAtributos = () => {
  const {
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
  } = UseCheckAtributos(); //usamos el Check Direccion

  return (
    <div className="row bloque__atributos  mb-3">
      <div className="col-md-12  m-0 p-0">
        <div className="row">
          <div className="col-md-12  m-0 p-0">
            <h4>ATRIBUTOS</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 bloque__back m-0 p-0">
            <div className="row">
              <div className="col-md-6">
                <div className="bloque__plan">
                  <h5>Seleccione para planificar</h5>

                  <div className="card">
                    <div className="row">
                      <div className="col-md-4">
                        <ToggleButtonGroup
                          type="checkbox"
                          name="domicilio"
                          value={valueDireccion}
                          onChange={capturaCheck1}
                        >
                          <ToggleButton
                            variant="secondary"
                            name="1"
                            value={true}
                          >
                            Dirección
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                      <div className="col-md-4">
                        <ToggleButtonGroup
                          type="checkbox"
                          name="poblacion"
                          value={valuePoblacion}
                          onChange={capturaCheck2}
                        >
                          <ToggleButton
                            variant="secondary"
                            name="2"
                            value={true}
                          >
                            Población
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                      <div className="col-md-4">
                        <ToggleButtonGroup
                          type="checkbox"
                          name="localidad"
                          value={valueLocalidad}
                          onChange={capturaCheck3}
                        >
                          <ToggleButton
                            variant="secondary"
                            name="3"
                            value={true}
                          >
                            Localidad
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 bloque_linea">
                <div className="bloque__planmin">
                  <h5>Añada campos para construir</h5>
                  <div className="card">
                    {showAl_Di && valueDireccion ? (
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
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
