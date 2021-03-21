import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  text-align: center;

  h1 {
    color: #01bf71;
    font-size: 2rem;
  }
`;

const TitleUnderline = styled.div`
  width: 10rem;
  height: 0.25rem;
  background: #cd853f;
  margin-top: 0.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <TitleUnderline />
    </TitleWrapper>
  );
};

export default Title;
