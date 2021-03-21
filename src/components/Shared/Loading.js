import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoadingIcon = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 5rem;
  border-radius: 50%;
  border: 7px solid #ccc;
  border-top-color: #cd853f;
  animation: spinner 0.6s linear infinite;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingIcon />
    </LoadingWrapper>
  );
};

export default Loading;
