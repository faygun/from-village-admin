import axios from "axios";

export const LOGIN = 'login';
export const storeKey = "login_U";

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = 'xxxx';
export function login(request, callback){
    // axios.get(`${ROOT_URL}/signin${API_KEY}`);
    let response = {};
    if(request.userName == 'faruk' && request.password == '1234'){
        response = {
            name:"Faruk",
            surname:"Aygün",
            email:"fa@test.com"
        };
    }
    callback(response);
    return {
        type:LOGIN,
        payload:response
    };
}