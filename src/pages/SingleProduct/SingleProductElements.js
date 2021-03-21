import styled from "styled-components";
import { FaCheck, FaTimes } from "react-icons/fa";

export const SingleProductWrapper = styled.section`
  margin-top: 3rem;
  min-height: calc(100vh - 160px);
  padding-right: 2rem;
  padding-left: 2rem;
`;

export const SingleProductContainer = styled.div`
  display: grid;
  gap: 2;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    /* align-items: center; */
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
    line-height: 1.5;
  }
`;

export const ProductTitle = styled.h2`
  letter-spacing: 2px;
`;

export const ProductPrice = styled.p`
  color: #bb0628;
  font-weight: bold;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

export const CheckIcon = styled(FaCheck)`
  color: #06d6a0;
  font-size: 1.2rem;
`;

export const TimesIcon = styled(FaTimes)`
  color: #9d0208;
  font-size: 1.2rem;
`;
