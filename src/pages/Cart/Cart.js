import React from "react";
import { CartContent, Title } from "../../components";
import { Button } from "../../components/Shared/Button";

import { useCartContext } from "../../context/CartContext";
import { CartWrapper } from "./CartElements";

const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <CartWrapper>
        <Title title='Your Shopping Cart' />
        <h2 style={{ textAlign: "center" }}>Your cart is empty</h2>
        <Button to='/products' style={{ margin: "1rem auto" }}>
          Shop Now
        </Button>
      </CartWrapper>
    );
  }

  return (
    <CartWrapper>
      <Title title='Your Shopping Cart' />
      <CartContent />
    </CartWrapper>
  );
};

export default Cart;
