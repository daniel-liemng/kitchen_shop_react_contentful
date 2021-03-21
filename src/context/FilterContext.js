import React, { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducers/FilterReducer";
import { useProductsContext } from "./ProductsContext";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from "../actions/actionTypes";

const FilterContext = createContext();

const initialState = {
  all_products: [],
  filtered_products: [],
  list_view: false,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
    storeAvailable: false,
  },
};

const FilterProvider = ({ children }) => {
  // Get all products from ProductContext
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // Load all products from ProductContext -> set products in initialState
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  // Load all products based on sort option
  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort]);

  // Set GridView
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  // Set ListView
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  // Update sort options
  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  // Update filter options
  const updateFilters = (e) => {};

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort, updateFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
