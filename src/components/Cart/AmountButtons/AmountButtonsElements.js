import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";

export const AmountButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  border: 1px solid grey;
  padding: 0.3rem 1rem;
`;

export const IconButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  width: 2rem;
  height: 2rem;
`;

export const DecreaseIcon = styled(FaMinus)``;

export const IncreaseIcon = styled(FaPlus)``;
