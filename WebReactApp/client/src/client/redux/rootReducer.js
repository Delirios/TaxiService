import { combineReducers } from "redux";
import newsReducer from "./reducers/newsReducer";
import categoriesReducer from "./reducers/categoriesReducer";

import adminReducer from "./reducers/adminReducer";
import userReducer from "./reducers/userReducer";
import orderReducer from "./reducers/orderReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  newsReducer,
  categoriesReducer,
  userReducer,
  adminReducer,
  orderReducer,
  form: formReducer,
});

export default rootReducer;
