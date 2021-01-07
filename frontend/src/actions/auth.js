import { fetchSinToken, fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { atributoLogout } from "./atributos";

/** START LOGIN */
/*=================================================================================*/
export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken("login", { email, password }, "POST"); //usando el helper de fetch remito url del endpoitn backend
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      localStorage.setItem("prs", body.usuario[0].id_persona);

      dispatch(
        login({
          id_persona: body.usuario[0].id_persona,
          nombres: body.usuario[0].nombres,
          imagen: body.usuario[0].imagen,
        })
      );
    } else {
      Swal.fire("Error", body.warning, "error");
    }
  };
};

// export const startRegister = (email, password, nombres) => {
//   return async (dispatch) => {
//     const resp = await fetchSinToken(
//       "auth/new",
//       { email, password, nombres },
//       "POST"
//     );
//     const body = await resp.json();

//     if (body.ok) {
//       localStorage.setItem("token", body.token);
//       localStorage.setItem("token-init-date", new Date().getTime());

//       dispatch(
//         login({
//           id_persona: body.id_persona,
//           nombres: body.nombres,
//         })
//       );
//     } else {
//       Swal.fire("Error", body.msg, "error");
//     }
//   };
// };

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchConToken("renew");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      localStorage.setItem("prs", body.id_persona);
      dispatch(
        login({
          id_persona: body.id_persona,
          nombres: body.nombres,
          imagen: body.imagen,
        })
      );
    } else {
      dispatch(checkingFinish());
    }
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

//grabo la informacion del usuario logeado en el store
const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(atributoLogout());
    dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });
