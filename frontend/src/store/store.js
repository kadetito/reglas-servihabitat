import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "../reducers/rootReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// import { applyMiddleware, compose, createStore } from 'redux'
// import reducer from './reducer'
// import logger from 'redux-logger'
// let finalCreateStore = compose(
//   applyMiddleware(logger())
// )(createStore)
// export default function configureStore(initialState = { todos: [] }) {
//   return finalCreateStore(reducer, initialState)
// }
