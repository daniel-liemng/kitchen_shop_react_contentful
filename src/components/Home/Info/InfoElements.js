import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";

export const InfoWrapper = styled.section`
  margin: 2rem 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-areas: ${({ imgRight }) =>
    imgRight && "img-area content"}; */
  grid-template-areas: "content img-area";
  grid-column-gap: 2rem;
  justify-content: center;
  /* align-items: center; */

  .img {
    grid-area: ${({ imgRight }) => (imgRight ? "img-area" : "content")};
  }

  .content {
    grid-area: ${({ imgRight }) => (imgRight ? "content" : "img-area")};
  }

  @media screen and (max-width: 812px) {
    grid-template-columns: 1fr;
    grid-template-areas: none;
  }
`;

export const InfoImgArea = styled.div``;

export const InfoImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  box-shadow: 8px 8px #cd853f;
`;

export const InfoArea = styled.div`
  margin-top: 2rem;
  line-height: 2;
  letter-spacing: 2px;
`;

export const RightIcon = styled(FaChevronRight)`
  margin-left: 0.5rem;
`;
