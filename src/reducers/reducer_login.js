import { LOGIN, storeKey } from "../actions/Login/";
import { LOGOUT } from "../actions/Logout";

export default function(state = [], action){
    switch(action.type){
        case LOGIN:
            {
                localStorage.setItem(storeKey, JSON.stringify(action.payload))
                return action.payload;
            }
            case LOGOUT:{
                localStorage.removeItem(storeKey);
                return action.payload;
            }

        default:
            return state;
    }
}