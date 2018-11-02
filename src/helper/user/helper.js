import { storeKey } from "../../actions/Login";

export function isLogin(){
    console.log(JSON.parse(localStorage.getItem(storeKey)));
   return $.isEmptyObject(JSON.parse(localStorage.getItem(storeKey))) === false;
}

export function getUser(){
    return JSON.parse(localStorage.getItem(storeKey));
}

export const AlertType = {
    Success : "success",
    Danger : "danger",
    Warning : "warning",
    Info : "info"
}