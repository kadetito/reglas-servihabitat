import { types } from "../types/types";

const initialState = {
  atributos: [],
  activeAtributo: null,
};

export const AtributosReducer = (state = initialState, action) => {
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

    case types.atributoLoaded:
      return {
        ...state,
        atributos: [...action.payload],
      };

    case types.atributoLogout:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
