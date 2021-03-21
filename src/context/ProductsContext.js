import React, { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducers/ProductsReducer";
import { client } from "./contentful";

const ProductsContext = createContext();

const initialState = {};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch products from Contentful
  const fetchProducts = () => {
    client
      .getEntries({ content_type: "kitchenStoreProducts" })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value='products'>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, useProductsContext };
