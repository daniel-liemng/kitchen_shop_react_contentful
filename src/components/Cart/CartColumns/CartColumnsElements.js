import styled from "styled-components";

export const CartColumnsWrapper = styled.div`
  display: none;

  @media screen and (min-width: 776px) {
    display: block;

    .content {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr 1fr;
      grid-column-gap: 1rem;
      margin-bottom: 2rem;
    }
  }
`;
