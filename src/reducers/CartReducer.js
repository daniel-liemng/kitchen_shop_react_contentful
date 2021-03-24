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
    default:
      throw new Error(`No Matching ${type} action type`);
  }
};

export default cartReducer;
