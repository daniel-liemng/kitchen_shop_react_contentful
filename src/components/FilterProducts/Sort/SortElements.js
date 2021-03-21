import styled from "styled-components";

export const SortWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  column-gap: 1rem;

  @media screen and (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
  }
`;

export const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
`;

export const Btn = styled.button`
  background: transparent;
  border: ${({ listview }) => (listview ? "green" : "red")};
  color: ${({ listview }) => (listview ? "red" : "green")};
  width: 1.5rem;
  border-radius: 5px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
