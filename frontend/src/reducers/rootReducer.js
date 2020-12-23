import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { AtributosReducer } from "./AtributosReducer";

export const rootReducer = combineReducers({
  atributos: AtributosReducer,
  auth: authReducer,
});
