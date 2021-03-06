import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions/actionTypes";

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      const { id, amount, product } = payload;

      const tempItem = state.cart.find((item) => item.id === id);

      // Item exist in the cart
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          // Update the amount if item to be added is already in the cart
          // Check the stock when update newAmount -> stock is the maximum
          if (cartItem.id === id) {
            let newAmount = cartItem.amount + amount;

            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }

            // Return the item with updated amount
            return { ...cartItem, amount: newAmount };
          } else {
            // keep the same item in cart if it is not the item to be added/updated
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        // No item in cart -> add new item to cart
        const newItem = {
          id,
          title: product.title,
          amount,
          image: product.image,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    case REMOVE_CART_ITEM:
      const tempCart = state.cart.filter((item) => item.id !== payload);

      return { ...state, cart: tempCart };
    case CLEAR_CART:
      return { ...state, cart: [] };
    case TOGGLE_CART_ITEM_AMOUNT:
      const temp_cart = state.cart.map((item) => {
        if (item.id === payload.id) {
          if (payload.value === "increase") {
            // Increase by 1 with checking the stock
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }
          if (payload.value === "decrease") {
            // Decrease by 1 with the limit  = 1
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
          return item;
        } else {
          return item;
        }
      });
      return { ...state, cart: temp_cart };
    case COUNT_CART_TOTALS:
      const totalAmount = state.cart.reduce(
        (acc, item) => (acc += item.price * item.amount),
        0
      );
      const totalItems = state.cart.reduce(
        (acc, item) => (acc += item.amount),
        0
      );
      return { ...state, total_items: totalItems, total_amount: totalAmount };
    default:
      throw new Error(`No Matching ${type} action type`);
  }
};

export default cartReducer;
