import React from "react";
import Img1 from "../../../images/coffee-maker.jpg";

import {
  InfoWrapper,
  InfoImgArea,
  InfoArea,
  InfoImg,
  RightIcon,
} from "./InfoElements";
import { Button } from "../../../components/Shared/Button";

const Info = ({ imgRight, title, text, btnLabel, imgPath, linkPath }) => {
  return (
    <InfoWrapper imgRight={imgRight}>
      <div className='img'>
        <InfoImgArea>
          <InfoImg src={imgPath} />
        </InfoImgArea>
      </div>
      <div className='content'>
        <InfoArea>
          <h2>{title}</h2>
          <p>{text}</p>
          <Button to={`/products?category=${linkPath}`}>
            {btnLabel} <RightIcon />
          </Button>
        </InfoArea>
      </div>
    </InfoWrapper>
  );
};

export default Info;
