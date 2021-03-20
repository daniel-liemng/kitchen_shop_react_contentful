import styled from "styled-components";

export const ErrorWrapper = styled.section`
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
`;

export const ErrorTitle = styled.h1`
  color: #cd853f;
  font-size: 3rem;
`;

export const ErrorText = styled.h1`
  color: #000;
  font-size: 2rem;
  margin-bottom: 1rem;
`;
