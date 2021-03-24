import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

export const CartItemWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  grid-column-gap: 0.5rem;

  span {
    display: none;
  }

  @media screen and (max-width: 776px) {
    grid-template-columns: 1fr;
    grid-row-gap: 0.5rem;

    span {
      display: inline-block;
      color: #000;
      margin-bottom: 0.5rem;
      margin-right: 1rem;
      font-weight: 400;
    }
  }

  img {
    height: 100px;
    width: 100px;
  }

  .price {
    color: #bb0628;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

export const RemoveIcon = styled(FaRegTrashAlt)`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: red;
  font-size: 1.3rem;
  cursor: pointer;
`;
