import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
