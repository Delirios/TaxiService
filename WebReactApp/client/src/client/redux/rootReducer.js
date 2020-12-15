import {combineReducers} from 'redux';
import newsReducer from './reducers/newsReducer';
import categoriesReducer from './reducers/categoriesReducer'
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    newsReducer,
    categoriesReducer,
    form: formReducer
})


export default rootReducer;