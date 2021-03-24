import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";

export const AmountButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: ${({ small }) => (small ? "100px" : "140px")};
  border: ${({ small }) => (small ? "none" : "1px solid grey")};
  padding: ${({ small }) => (small ? "none" : "0.3rem 1rem")};
`;

export const IconButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const DecreaseIcon = styled(FaMinus)``;

export const IncreaseIcon = styled(FaPlus)``;
