import axios from "axios";
import { CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, SORT_BY_PRICE, SORT_BY_NAME, SORT_BY_STOCK } from "./types";
import url from "../config/config";

export const createProductAction = (values) => {
    return async (dispatch) => {
        try {
            let res = await axios.post(`${url}/api/product`, values );
            console.log("ACTION CREATE RESPONSE", res);
            dispatch({ type: CREATE_PRODUCT,  payload: res })
        } catch (error) {
            console.log(error);
        }
    }
};


export const getAllProductsAction = (companyId) => {
    return async(dispatch) => {
        try {
            const bddData = await axios.get(`${url}/api/products/${companyId}`);
            const allProducts = bddData.data;
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: allProducts
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getProductDetailAction = (productId, companyId) => {
    return async(dispatch) => {
        try {
            const bddData = await axios.get(`${url}/api/product/${productId}/${companyId}`);
            const product = bddData.data;
            dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: product
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}
 export const sortByPriceAction = (value) => {
    return {
        type: SORT_BY_PRICE,
        payload: value 
    }
 }

 export const sortByNameAction = (value) => {
    return {
        type: SORT_BY_NAME,
        payload: value 
    }
 }

 export const sortByStockAction = (value) => {
    return {
        type: SORT_BY_STOCK,
        payload: value 
    }
 }