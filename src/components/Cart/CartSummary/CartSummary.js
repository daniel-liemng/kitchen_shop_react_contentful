import React from "react";

import { CartSummaryWrapper } from "./CartSummaryElements";
import { useCartContext } from "../../../context/CartContext";
import { Button } from "../../Shared/Button";

const CartSummary = () => {
  const { total_amount, shipping_fee } = useCartContext();

  return (
    <CartSummaryWrapper>
      <h3>Order Summary</h3>
      <div className='content'>
        <p>
          Subtotal <span>${total_amount}</span>
        </p>
        <p>
          Shipping Fee <span>${shipping_fee}</span>
        </p>
        <hr />
        <h4>
          Order Total <span>${total_amount + shipping_fee}</span>
        </h4>
      </div>

      <Button to='/checkout'>Proceed to Checkout</Button>
    </CartSummaryWrapper>
  );
};

export default CartSummary;
