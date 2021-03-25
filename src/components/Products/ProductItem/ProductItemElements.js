import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductItemWrapper = styled.article`
  border-radius: 5px;
  /* background: #b7b7a4; */
  background: #e9ecef;
  padding: 1.5rem;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 250px;
  display: block;
  object-fit: contain;
  border-radius: 5px;
`;

export const ProductContent = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    color: #cd853f;
  }
`;

export const ProductPrice = styled.p`
  color: #bb0628;
  font-weight: bold;
  margin-top: 1rem;
  font-size: 1.5rem;
`;
