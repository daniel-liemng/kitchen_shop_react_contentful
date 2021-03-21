import styled from "styled-components";

export const ProductListWrapper = styled.section``;

export const ProductListContainer = styled.div`
  display: grid;
  gap: 2rem 1.5rem;
  margin: 2rem 3rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
