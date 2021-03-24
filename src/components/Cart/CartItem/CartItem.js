import React from "react";

import { CartItemWrapper, RemoveIcon } from "./CartItemElements";
import AmountButtons from "../AmountButtons/AmountButtons";
import { useCartContext } from "../../../context/CartContext";

const CartItem = ({ id, title, price, amount, image }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    // Just pass the signal of Increase
    toggleAmount(id, "increase");
  };

  const decrease = () => {
    // Just pass the signal of Decrease
    toggleAmount(id, "decrease");
  };

  return (
    <CartItemWrapper>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <button
          onClick={() => removeItem(id)}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            padding: "0",
          }}
        >
          <RemoveIcon />
        </button>
      </div>

      <div className='price'>
        <span>Unit price:</span>${price}
      </div>
      <AmountButtons
        amount={amount}
        increaseAmount={increase}
        decreaseAmount={decrease}
        small
      />
      <div className='price'>
        <span>Subtotal:</span>${(price * amount).toFixed(2)}
      </div>
    </CartItemWrapper>
  );
};

export default CartItem;
