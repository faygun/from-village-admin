import _ from 'lodash';
import {FETCH_PRODUCT} from '../actions/Product';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_PRODUCT:{
            return action.payload;
        }
        default:
            return state
    }
}