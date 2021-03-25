import styled from "styled-components";

export const ProductsWrapper = styled.section`
  margin: 2rem auto;
  min-height: calc(100vh - 224px);
`;

export const ProductsContainer = styled.div`
  display: grid;
  gap: 2rem 1.5rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 200px 1fr;
  }
`;
