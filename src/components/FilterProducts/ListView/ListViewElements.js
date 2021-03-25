import styled from "styled-components";

export const ListViewWrapper = styled.section`
  margin: 1.5rem 2rem;
  display: grid;
  row-gap: 2rem;
`;

export const ListViewProductItem = styled.article`
  border-radius: 5px;
  /* background: #b7b7a4; */
  background: #e9ecef;
  display: grid;
  grid-template-columns: 300px 1fr;

  @media screen and (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  width: 300px;
  height: 250px;
  object-fit: contain;
  padding: 1rem;
`;

export const ProductContent = styled.div`
  margin: 1.5rem 2rem;

  .price {
    color: #bb0628;
    font-weight: bold;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  .description {
    margin-top: 1rem;
    margin-bottom: 1rem;
    line-height: 2;
    letter-spacing: 1px;
  }
`;
