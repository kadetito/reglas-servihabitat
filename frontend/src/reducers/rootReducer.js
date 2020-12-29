import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { AtributosReducer } from "./AtributosReducer";
import { TiposInmuebleReducer } from "./TiposInmuebleReducer";

export const rootReducer = combineReducers({
  atributos: AtributosReducer,
  tinmuebles: TiposInmuebleReducer,
  auth: authReducer,
});
