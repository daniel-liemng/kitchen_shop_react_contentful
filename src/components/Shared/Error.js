import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Error = () => {
  return (
    <ErrorWrapper>
      <h1>Error !!!</h1>
    </ErrorWrapper>
  );
};

export default Error;
