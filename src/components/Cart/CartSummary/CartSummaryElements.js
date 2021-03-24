import styled from "styled-components";

export const CartSummaryWrapper = styled.section`
  background-color: #e8e8e4;
  padding: 1rem;
  border-radius: 5px;
  line-height: 2;

  .content {
    p,
    h4 {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    hr {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;
