//import Swal from "sweetalert2";
import { prepareAtributos } from "../helpers/prepareAtributos";

import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";

// const eventAddNew = (event) => ({
//     type: types.eventAddNew,
//     payload: event
// });

// export const eventSetActive = (event) => ({
//     type: types.eventSetActive,
//     payload: event
// });

// export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent });

// export const eventStartUpdate = ( event ) => {
//     return async(dispatch) => {

//         try {
//             const resp = await fetchConToken(`events/${ event.id }`, event, 'PUT' );
//             const body = await resp.json();

//             if ( body.ok ) {
//                 dispatch( eventUpdated( event ) );
//             } else {
//                 Swal.fire('Error', body.msg, 'error');
//             }

//         } catch (error) {
//             console.log(error)
//         }

//     }
// }

// const eventUpdated = ( event ) => ({
//     type: types.eventUpdated,
//     payload: event
// });

// export const eventStartDelete = () => {
//     return async ( dispatch, getState ) => {

//         const { id } = getState().calendar.activeEvent;
//         try {
//             const resp = await fetchConToken(`events/${ id }`, {}, 'DELETE' );
//             const body = await resp.json();

//             if ( body.ok ) {
//                 dispatch( eventDeleted() );
//             } else {
//                 Swal.fire('Error', body.msg, 'error');
//             }

//         } catch (error) {
//             console.log(error)
//         }

//     }
// }

// const eventDeleted = () => ({ type: types.eventDeleted });

export const atributoStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("atributos");
      const body = await resp.json();
      console.log(body);
      const atributos = prepareAtributos(body.atributos);
      dispatch(atributoLoaded(atributos));
    } catch (error) {
      console.log(error);
    }
  };
};

const atributoLoaded = (atributos) => ({
  type: types.atributoLoaded,
  payload: atributos,
});

export const atributoLogout = () => ({ type: types.atributoLogout });
