import React, { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducers/ProductsReducer";
import { client } from "./contentful";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../actions/actionTypes";

const ProductsContext = createContext();

const initialState = {
  products: [],
  featured_products: [],
  products_loading: false,
  products_error: false,
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch products from Contentful
  const fetchProducts = () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });

    client
      .getEntries({ content_type: "kitchenStoreProducts" })
      .then((res) =>
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.items })
      )
      .catch((err) => dispatch({ type: GET_PRODUCTS_ERROR, payload: err }));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, useProductsContext };
