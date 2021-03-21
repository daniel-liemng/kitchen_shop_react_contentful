import { LOAD_PRODUCTS } from "../actions/actionTypes";

const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        all_products: [...payload],
        filtered_products: [...payload],
      };
    default:
      throw new Error(`No Matching ${type} action type`);
  }
};

export default filterReducer;
