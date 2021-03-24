import React from "react";

import { CartContentWrapper } from "./CartContentElements";
import { useCartContext } from "../../../context/CartContext";
import CartColumns from "../CartColumns/CartColumns";
import CartItem from "../CartItem/CartItem";
import CartSummary from "../CartSummary/CartSummary";
import { Button, ClickButton } from "../../Shared/Button";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <CartContentWrapper>
      <div className='details'>
        <CartColumns />
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <hr />
        <div className='btn-group'>
          <Button to='/products'>Continue Shopping</Button>
          <ClickButton onClick={clearCart}>Clear Cart</ClickButton>
        </div>
      </div>

      <div className='summary'>
        <CartSummary />
      </div>
    </CartContentWrapper>
  );
};

export default CartContent;
