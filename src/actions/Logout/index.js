import axios from "axios";
import { storeKey } from "../Login";

export const LOGOUT = 'logout';

export function logout(callback){
    callback(true);
    return {
        type:LOGOUT,
        payload:true
    }
}