import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import ProductReducer from './reducer_products';
import ProductDetailReducer from './reducer_detail';
import  LoginReducer  from "./reducer_login";

const rootReducer = combineReducers({
    products:ProductReducer,
    productDetail:ProductDetailReducer,
    form:formReducer,
    user:LoginReducer
});

export default rootReducer;
