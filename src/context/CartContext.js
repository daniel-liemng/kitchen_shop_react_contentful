import React, { createContext, useContext, useReducer } from "react";

import reducer from "../reducers/CartReducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions/actionTypes";

const CartContext = createContext();

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 5.34,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Add To Cart
  const addToCart = (id, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, product } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
