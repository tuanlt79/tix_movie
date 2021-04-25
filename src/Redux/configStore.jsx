import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { PhimReducer } from "./Reducer/PhimReducer";
const rootReducer = combineReducers({
  PhimReducer,
});
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
