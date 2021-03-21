import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
} from "../actions/actionTypes";

const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        all_products: [...payload],
        filtered_products: [...payload],
      };
    case SET_GRIDVIEW:
      return { ...state, list_view: false };
    case SET_LISTVIEW:
      return { ...state, list_view: true };
    default:
      throw new Error(`No Matching ${type} action type`);
  }
};

export default filterReducer;
