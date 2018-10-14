import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';
export const FETCH_PRODUCT = 'fetch_product';
export const CREATE_PRODUCT = 'create_product';
export const DELETE_PRODUCT = 'delete_product';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=afa252525';
export function fetchProducts(){
    //const request = axios.get(`${ROOT_URL}/products${API_KEY}`);
    let request = [{
        id : 1001,
        name : "Apple Jar",
        type : "Jar",
        arrivaDate : 2,
        price : 5,
        active : true,
        updateDate : "05.10.2018"
    },
    {
        id : 1002,
        name : "Chicken",
        type : "Meat",
        arrivaDate : 1,
        price : 10,
        active : true,
        updateDate : "09.10.2018"
    }]
    return{
        type: FETCH_PRODUCTS,
        payload:request
    }
}

export function createProduct(values, callback){
    const request = axios.product(`${ROOT_URL}/products${API_KEY}`, values)
        .then(()=> {
            callback()
        });
    return{
        type: CREATE_PRODUCT,
        payload:request
    }
}

export function fetchProduct(id){
    //const request = axios.get(`${ROOT_URL}/products/${id}${API_KEY}`);
    let request = {
        id : 1002,
        name : "Chicken",
        type : "Meat",
        arrivaDate : 1,
        price : 10,
        active : true,
        updateDate : "09.10.2018"
    }
    return{
        type: FETCH_PRODUCT,
        payload:request
    }
}

export function deleteProduct(id, callback){
    const request = axios.delete(`${ROOT_URL}/products/${id}${API_KEY}`)
    .then(()=> callback());
    
    return{
        type: DELETE_PRODUCT,
        payload:id
    }
}
