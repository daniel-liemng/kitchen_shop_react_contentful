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
      } else {
        // No item in cart -> add new item
        const newItem = {
          id,
          title: product.title,
          amount,
          image: product.image.fields.file.url,
          price: product.price,
          max: product.stock,
        };

        return { ...state, cart: [...state.cart, newItem] };
      }

      return { ...state };
    default:
      throw new Error(`No Matching ${type} action type`);
  }
};

export default cartReducer;
