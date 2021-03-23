import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Shared/Button";

import { AddToCartWrapper } from "./AddToCartElements";
import AmountButtons from "../AmountButtons/AmountButtons";
import { useCartContext } from "../../../context/CartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, stock } = product;

  // state
  const [amount, setAmount] = useState(1);

  // func
  const increaseAmount = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount + 1;

      if (tempAmount > stock) {
        tempAmount = stock;
      }

      return tempAmount;
    });
  };

  const decreaseAmount = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount - 1;

      if (tempAmount < 1) {
        tempAmount = 1;
      }

      return tempAmount;
    });
  };

  return (
    <AddToCartWrapper>
      <AmountButtons
        amount={amount}
        increaseAmount={increaseAmount}
        decreaseAmount={decreaseAmount}
      />
      <Button to='/cart' onClick={() => addToCart(id, amount, product)}>
        Add To Cart
      </Button>
    </AddToCartWrapper>
  );
};

export default AddToCart;
