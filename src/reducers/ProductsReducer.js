import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../actions/actionTypes";

const productsReducer = (state, action) => {
  const { type, payload } = action;

  switch (action) {
    case GET_PRODUCTS_BEGIN:
      return state;
    case GET_PRODUCTS_SUCCESS:
      return state;
    case GET_PRODUCTS_ERROR:
      return state;
    default:
      throw new Error(`No Matching ${type} action type`);
  }
};

export default productsReducer;
