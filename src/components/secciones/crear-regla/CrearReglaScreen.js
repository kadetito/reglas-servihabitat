import { Footer } from "../../comunes/Footer";
import { Header } from "../../comunes/Header";
import { NavBar } from "../../comunes/NavBar";

import { useTipoInmueble } from "../../../hooks/useTipoInmueble";
import DropdownType from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Alert } from "react-bootstrap";
import { BloqueAtributos } from "./bloques/BloqueAtributos";
import { BloqueCaracteristicas } from "./bloques/BloqueCaracteristicas";
import { BloqueSituaciones } from "./bloques/BloqueSituaciones";
import { useForm } from "../../../hooks/useForm";

export const CrearReglaScreen = () => {
  //-----------hook useTipoInmueble
  const {
    showAl_Ti,
    valueTipoInmueble,
    reset,
    capturaSelect,
  } = useTipoInmueble(); //usamos el TipoInmueble

  //-----------hook useForm
  const [formValues, handleInputChange] = useForm({
    tipoinmueble: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { tipoinmueble } = formValues;

  return (
    <div>
      <NavBar />
      <Header />
      <div className="bloque__crear-container">
        <div className="row mb-5">
          <div className="col-12 bloque__crear-acciones">
            <i className="fas fa-search smallicon"></i> BUSCAR | CARGAR | EDITAR
          </div>
        </div>

        <div className="row">
          <div className="col-md-9">
            <div className="row bloque__selector  mb-3">
              <div className="col-md-12  m-0 p-0">
                <div className="row">
                  <div className="col-md-12  m-0 p-0">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="bloque__planminnopad">
                          <DropdownType
                            alignRight
                            size="lg"
                            variant="secondary"
                            title="TIPO DE INMUEBLE"
                            id="dropdown-menu-align-right"
                            onSelect={capturaSelect}
                          >
                            <Dropdown.Item eventKey="option-1">
                              option-1
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="option-2">
                              option-2
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="option-3">
                              option 3
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="some link">
                              some link
                            </Dropdown.Item>
                          </DropdownType>
                        </div>
                      </div>
                      <div className="col-md-6 bloque_linea">
                        <div className="bloque__planmin">
                          <p>Regla 01 text text text</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BloqueAtributos />
            <BloqueCaracteristicas />
            <BloqueSituaciones />
          </div>
          <div className="col-md-3">
            <div className="row bloque__resultados">
              <div className="col-12  m-0 p-0">
                <div className="row">
                  <div className="col-12 m-0 p-0">
                    <h4>SELECCIÓN/CARACTERÍSTICAS</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 bloque__back">
                    <form onSubmit={handleSubmit}>
                      {showAl_Ti && valueTipoInmueble ? (
                        <Alert variant="light" onClose={reset} dismissible>
                          <p>Tipo de inmueble: {valueTipoInmueble}</p>
                          <input
                            name="tipoinmueble"
                            type="hidden"
                            value={valueTipoInmueble}
                            onChange={handleInputChange}
                          />
                        </Alert>
                      ) : null}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
