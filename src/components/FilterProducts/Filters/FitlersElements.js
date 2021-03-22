import styled from "styled-components";

export const FiltersWrapper = styled.div`
  margin-left: 1rem;
  margin-top: 2rem;

  .form-control {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;

    p,
    label {
      margin-bottom: 0.6rem;
    }
  }

  .form-control-checkbox {
    display: inline-block;
    margin-bottom: 1rem;
  }
`;

export const PriceFilter = styled.input``;

export const ClearBtn = styled.button`
  min-width: 100px;
  max-width: 200px;
  outline: none;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.2s ease-out;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  background: ${({ primary }) => (primary ? "#000d1a" : "#cd853f")};
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-2px);
  }
`;
