import { createStore } from "redux";
import rootReducers from "./rootReducer";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const composeEnhancers =
  window._REDUX_DEVTOOLS_EXTENSIONS_ && window._REDUX_DEVTOOLS_EXTENSIONS_;
const store = createStore(
  rootReducers,
  composeEnhancers,
  applyMiddleware(thunk)
);
export default store;
