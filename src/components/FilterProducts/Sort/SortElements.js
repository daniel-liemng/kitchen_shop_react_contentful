import styled from "styled-components";

export const SortWrapper = styled.section`
  display: grid;
  row-gap: 1rem;
  align-items: center;
  margin: 1.5rem;
  column-gap: 1rem;

  @media screen and (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const ViewDisplay = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  row-gap: 0.5rem;
  column-gap: 1rem;
`;

export const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
`;

export const Btn = styled.button`
  background: transparent;
  border: ${({ active }) => (active ? "2px solid red" : "2px solid #000")};
  color: ${({ active }) => (active ? "red" : "#000")};
  width: 1.5rem;
  border-radius: 5px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
`;

export const SearchComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 0.5rem;
`;

export const SearchContainer = styled.div`
  select {
    padding: 0.3rem;
    background: #01bf71;
    outline: none;
  }

  input {
    padding: 0.3rem;
    width: 30%;
    outline: none;
  }
`;

export const SortContainer = styled.div`
  select {
    padding: 0.3rem;
    outline: none;
  }
`;
