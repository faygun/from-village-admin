import { storeKey } from "../../actions/Login";

export function isLogin(){
   return $.isEmptyObject(JSON.parse(localStorage.getItem(storeKey))) === false;
}

export function getUser(){
    return JSON.parse(localStorage.getItem(storeKey));
}