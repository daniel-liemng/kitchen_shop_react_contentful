import styled from "styled-components";

export const CartContentWrapper = styled.section`
  margin: 2rem auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "details details summary";
  grid-column-gap: 1rem;

  .details {
    grid-area: details;
  }

  .summary {
    grid-area: summary;
  }

  @media screen and (max-width: 812px) {
    grid-template-columns: 1fr;
    grid-template-areas: "details" "summary";
  }

  .btn-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;

    @media screen and (max-width: 812px) {
      flex-direction: column;
    }
  }
`;
