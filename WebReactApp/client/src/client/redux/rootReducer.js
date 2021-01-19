import newsReducer from "./reducers/newsReducer";
import catalogReducer from "./reducers/catalogReducer";
import userReducer from "./reducers/userReducer";
import orderReducer from "./reducers/orderReducer";

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  newsReducer,
  catalogReducer,
  userReducer,
  orderReducer,
  form: formReducer,
});

export default rootReducer;
