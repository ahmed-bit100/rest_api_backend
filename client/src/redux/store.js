import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  userReducer,
  compose(applyMiddleware(thunk), devtools)
);

export default store;
