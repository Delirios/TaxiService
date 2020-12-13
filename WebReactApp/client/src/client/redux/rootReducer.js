import {combineReducers} from 'redux';
import newsReducer from './reducers/newsReducer';
import categoriesReducer from './reducers/categoriesReducer'



const rootReducer = combineReducers({
    newsReducer,
    categoriesReducer
})


export default rootReducer;