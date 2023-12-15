import axios from "axios";
import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  SORT_BY_PRICE,
  SORT_BY_STOCK,
  FILTER_BY_CATEGORY,
} from "./types";
import url from "../config/config";
import {
  sweetAlertsSuccessfully,
  sweetAlertsError,
} from "../components/Utils/alerts/sweetAlerts";

export const createProductAction = (values) => {
  return async (dispatch) => {
    try {
      let res = await axios.post(`${url}/api/product`, values);
      dispatch({ type: CREATE_PRODUCT, payload: res.data });
      sweetAlertsSuccessfully("Felicidades", res.data.message, "Ok");
    } catch (error) {
      console.log(error);
      sweetAlertsError(
        "Uh... intenta de nuevo",
        "No pudimos crear el nuevo producto",
        "Ok"
      );
    }
  };
};

export const getAllProductsAction = (companyId) => {
  return async (dispatch) => {
    try {
      const bddData = await axios.get(
        `http://localhost:3000/api/products/${companyId}`
      );
      const allProducts = bddData.data;
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: allProducts,
      });
    } catch (error) {
      console.log(error.message);
      //instalar libreria para alerta de errores(sprint 3 ó 4)
    }
  };
};

export const getProductDetailAction = (productId, companyId) => {
  return async (dispatch) => {
    try {
      const bddData = await axios.get(
        `http://localhost:3000/api/product/${productId}/${companyId}`
      );
      const product = bddData.data;
      dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: product,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const sortByPriceAction = (value) => {
  return {
    type: SORT_BY_PRICE,
    payload: value,
  };
};

export const sortByStockAction = (value) => {
  return {
    type: SORT_BY_STOCK,
    payload: value,
  };
};

export const filterByCategoryAction = (value) => {
  //console.log('recibe el dispatch');
 // console.log('value recibido: ', value);
 // console.log('envio action al reducer');
  return {
    type: FILTER_BY_CATEGORY,
    payload: value
  }
}
