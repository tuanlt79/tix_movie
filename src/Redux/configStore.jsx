import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { PhimReducer } from "./Reducer/PhimReducer";
import { LoadingReducer } from "./Reducer/LoadingReducer";
import { QuanLyDatVeReducer } from "./Reducer/QuanLyDatVeReducer";

const rootReducer = combineReducers({
  PhimReducer,
  LoadingReducer,
  QuanLyDatVeReducer,
});
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
