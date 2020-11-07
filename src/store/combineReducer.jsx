import { combineReducers } from "redux";
import numReducer from "./../service/numReducer";

const rootReducer = combineReducers({
  numReducer,
});

export default rootReducer;
