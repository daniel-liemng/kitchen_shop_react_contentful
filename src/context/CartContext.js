import React, { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducers/CartReducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions/actionTypes";

const CartContext = createContext();

// Check localStorage -> set iniital value of cart is the data in localStorage
const getCartFromLocalStorage = () => {
  return localStorage.getItem("kitchen-cart")
    ? JSON.parse(localStorage.getItem("kitchen-cart"))
    : [];
};

const initialState = {
  // cart: [],
  cart: getCartFromLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 5.34,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Save the current cart to localStorage
  useEffect(() => {
    localStorage.setItem("kitchen-cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // Add To Cart
  const addToCart = (id, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, product } });
  };

  // Remove Item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  // Toggle amount
  const toggleAmount = (id, value) => {};

  // Clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
