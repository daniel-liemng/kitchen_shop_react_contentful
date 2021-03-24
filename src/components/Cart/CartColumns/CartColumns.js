import React from "react";

import { CartColumnsWrapper } from "./CartColumnsElements";

const CartColumns = () => {
  return (
    <CartColumnsWrapper>
      <div className='content'>
        <h4>Product Details</h4>
        <h4>Unit Price</h4>
        <h4>Quantity</h4>
        <h4>Subtotal</h4>
      </div>
    </CartColumnsWrapper>
  );
};

export default CartColumns;
