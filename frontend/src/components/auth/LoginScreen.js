import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startLogin, startRegister } from "../../actions/auth";
import Swal from "sweetalert2";

import "./login.css";
export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "rafa@webentorn.com",
    lPassword: "JRK441e22",
  });

  // const [formRegisterValues, handleRegisterInputChange] = useForm({
  //   rName: "Nando",
  //   rEmail: "nando@gmail.com",
  //   rPassword1: "123456",
  //   rPassword2: "123456",
  // });

  const { lEmail, lPassword } = formLoginValues;
  // const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  };

  // const handleRegister = (e) => {
  //   e.preventDefault();

  //   if (rPassword1 !== rPassword2) {
  //     return Swal.fire(
  //       "Error",
  //       "Las contraseñas deben de ser iguales",
  //       "error"
  //     );
  //   }
  //   console.log("?");
  //   dispatch(startRegister(rEmail, rPassword1, rName));
  // };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="row mb-4">
          <div className="col ">
            <div className="form-inline form-group m-0 p-0  auth__width50 auth__inputs auth__noborder-bottom text-left authinputsmail">
              <div className="row m-0 p-0">
                <div className="col-4 m-0  padding-exacto">
                  <h5 className="auth__label">E-mail:</h5>
                </div>
                <div className="col-8 m-0 p-0">
                  <input
                    type="text"
                    id="authinputsmail"
                    className="form-control auth__no-border "
                    placeholder="Correo"
                    name="lEmail"
                    value={lEmail}
                    onChange={handleLoginInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-inline form-group m-0 p-0  auth__width50 auth__inputs text-left authinputspass">
              <div className="row  m-0 p-0 ">
                <div className="col-4  m-0   padding-exacto">
                  <h5 className="auth__label">Contraseña:</h5>
                </div>
                <div className="col-8  m-0 p-0">
                  <input
                    type="password"
                    id="authinputspass"
                    className="form-control auth__no-border "
                    placeholder="Contraseña"
                    name="lPassword"
                    value={lPassword}
                    onChange={handleLoginInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row  mb-5 ">
          <div className="col-md-6  roboto size12px colorverde">
            <input type="checkbox" /> Guardar contraseña
          </div>
          <div className="col-md-6"></div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <input type="submit" className="auth__btnSubmit" value="Login" />
            {/* <button className="btn btn-primary btn-naranja-login">Login</button> */}
          </div>
        </div>{" "}
      </form>
    </>
  );
};
