import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  white-space: nowrap;
  min-width: 100px;
  max-width: 200px;
  outline: none;
  border: none;
  text-decoration: none;
  letter-spacing: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-out;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  background: ${({ primary }) => (primary ? "#000d1a" : "#cd853f")};
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-2px);
  }
`;
