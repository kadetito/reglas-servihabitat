import { types } from "../types/types";

const initialState = {
  tiposInmueble: [],
  activetiposInmueble: null,
};

export const TiposInmuebleReducer = (state = initialState, action) => {
  switch (action.type) {
    // case types.atributosSetActive:
    //     return {
    //         ...state,
    //         activeAtributo: action.payload
    //     }

    // case types.eventAddNew:
    //     return {
    //         ...state,
    //         atributos: [
    //             ...state.atributos,
    //             action.payload
    //         ]
    //     }

    // case types.eventClearActiveEvent:
    //     return {
    //         ...state,
    //         activeAtributo: null
    //     }

    // case types.eventUpdated:
    //     return {
    //         ...state,
    //         atributos: state.atributos.map(
    //             e => ( e.id === action.payload.id ) ? action.payload : e
    //         )
    //     }

    // case types.eventDeleted:
    //     return {
    //         ...state,
    //         atributos: state.atributos.filter(
    //             e => ( e.id !== state.activeAtributo.id )
    //         ),
    //         activeAtributo: null
    //     }

    case types.tiposInmuebleLoaded:
      return {
        ...state,
        tiposInmueble: [...action.payload],
      };

    default:
      return state;
  }
};
