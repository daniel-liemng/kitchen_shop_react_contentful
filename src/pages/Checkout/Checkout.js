import React from "react";
import { Title } from "../../components";

import { CheckoutWrapper } from "./CheckoutElement";

const Checkout = () => {
  return (
    <CheckoutWrapper>
      <Title title='Check Out' />
      <h3>Thank you for your shopping with our store.</h3>
    </CheckoutWrapper>
  );
};

export default Checkout;
