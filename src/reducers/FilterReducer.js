import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  SET_SINGLE_PRODUCT,
} from "../actions/actionTypes";

const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "abc":
      return { ...state };
    default:
      throw new Error(`No Matching ${type} action type`);
  }
};

export default filterReducer;
