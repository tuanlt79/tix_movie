import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { PhimReducer } from "./Reducer/PhimReducer";
import { LoadingReducer } from "./Reducer/LoadingReducer";
import { QuanLyDatVeReducer } from "./Reducer/QuanLyDatVeReducer";
import { UserReducer } from "./Reducer/UserReducer";
import { AddUserReducer } from "./Reducer/AddUserReducer";
const rootReducer = combineReducers({
  PhimReducer,
  LoadingReducer,
  QuanLyDatVeReducer,
  UserReducer,
  AddUserReducer,
});
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
