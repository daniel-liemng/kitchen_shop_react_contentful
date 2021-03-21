import React, { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducers/FilterReducer";
import { useProductsContext } from "./ProductsContext";
import { LOAD_PRODUCTS } from "../actions/actionTypes";

const FilterContext = createContext();

const initialState = {
  all_products: [],
  filtered_products: [],
};

const FilterProvider = ({ children }) => {
  // Get all products from ProductContext
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // Load all products from ProductContext -> set products in initialState
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
