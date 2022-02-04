import { createStore, combineReducers } from "redux";
import { authReducer } from "../redux/reducer/authReducer";

const combineReducer = combineReducers({
  auth: authReducer,
});
export const store = createStore(combineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
