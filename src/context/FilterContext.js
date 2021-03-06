import React, { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducers/FilterReducer";
import { useProductsContext } from "./ProductsContext";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  UPDATE_CATEGORY_FILTER,
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

  // Load all products based on sort options and filter options
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

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
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "price") {
      value = Number(value);
    }

    if (name === "shipping" || name === "storeAvailable") {
      value = e.target.checked;
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  // Clear filter options
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  // Filter by category (Homepage)
  const updateCategoryFilter = (catTerm) => {
    dispatch({ type: UPDATE_CATEGORY_FILTER, payload: catTerm });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
        updateCategoryFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
