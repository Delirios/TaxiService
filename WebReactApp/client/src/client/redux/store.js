import InputGroupWithExtras from "react-bootstrap/esm/InputGroup";
import {createStore} from "redux";
import reducer from "./reducers/reducer";


const store = createStore(reducer);

export default store;