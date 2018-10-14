import _ from 'lodash';
import {FETCH_PRODUCTS, FETCH_PRODUCT} from '../actions/Product';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_PRODUCT:{
            // var result = {...state, [action.payload.id]:action.payload};
            return action.payload;
        }
        
        case FETCH_PRODUCTS:{
            return action.payload;
        }
            
        default:
            return state
    }
}