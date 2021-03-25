import styled from "styled-components";

export const AboutWrapper = styled.section`
  min-height: calc(100vh - 224px);
  padding: 1rem;
`;

export const AboutImg = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
`;

export const AboutContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const AboutTitle = styled.h1`
  color: #01bf71;
  font-size: 2.5rem;
  /* border-bottom: 3px solid #cd853f; */
  margin-bottom: 1.5rem;
`;

export const AboutText = styled.p`
  margin-bottom: 1rem;
  letter-spacing: 1px;
  line-height: 1.5;
`;
