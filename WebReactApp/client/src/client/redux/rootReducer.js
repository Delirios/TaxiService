import { combineReducers } from "redux";
import newsReducer from "./reducers/newsReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import userReducer from "./reducers/userReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  newsReducer,
  categoriesReducer,
  userReducer,
  form: formReducer,
});

export default rootReducer;
