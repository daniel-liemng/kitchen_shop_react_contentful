import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  SET_SINGLE_PRODUCT,
} from "../actions/actionTypes";

import { formatProduct } from "../utils/helpers";

const productsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products_loading: false,
        products: payload.map((item) => formatProduct(item)),
        featured_products: payload
          .map((item) => formatProduct(item))
          .filter((item) => item.featured === true),
        // featured_products: payload.filter(
        //   (item) => item.fields.featured === true
        // ),
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, products_loading: false, products_error: true };
    case SET_SINGLE_PRODUCT:
      // find single product in products
      const product = state.products.find((product) => product.id === payload);

      // store single product in localStorage
      localStorage.setItem("singleProduct", JSON.stringify(product));

      return {
        ...state,
        single_product: product,
      };
    default:
      throw new Error(`No Matching ${type} action type`);
  }
};

export default productsReducer;
