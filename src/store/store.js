import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { authReducer } from "../redux/reducer/authReducer";
import thunk from "redux-thunk";

// const composeEnhancers = window.__REDUD_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancer =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const combineReducer = combineReducers({
  auth: authReducer,
});
export const store = createStore(
  combineReducer,
  composeEnhancer(applyMiddleware(thunk))
);
