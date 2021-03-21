import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../actions/actionTypes";

const productsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products_loading: false,
        products: payload,
        featured_products: payload.filter(
          (item) => item.fields.featured === true
        ),
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, products_loading: false, products_error: payload };
    default:
      throw new Error(`No Matching ${type} action type`);
  }
};

export default productsReducer;
