import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { PhimReducer } from "./Reducer/PhimReducer";
import { LoadingReducer } from "./Reducer/LoadingReducer";
const rootReducer = combineReducers({
  PhimReducer,
  LoadingReducer,
});
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
