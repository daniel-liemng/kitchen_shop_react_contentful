import React from "react";

import {
  AmountButtonsWrapper,
  IconButton,
  DecreaseIcon,
  IncreaseIcon,
} from "./AmountButtonsElements";

const AmountButtons = ({ amount, increaseAmount, decreaseAmount }) => {
  return (
    <AmountButtonsWrapper>
      <IconButton type='button' onClick={decreaseAmount}>
        <DecreaseIcon />
      </IconButton>
      <h2>{amount}</h2>
      <IconButton type='button' onClick={increaseAmount}>
        <IncreaseIcon />
      </IconButton>
    </AmountButtonsWrapper>
  );
};

export default AmountButtons;
