import React from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

import { StarWrapper, StarContainer } from "./StarElements";

const Star = ({ rating }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <StarContainer key={index}>
        {rating >= index + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </StarContainer>
    );
  });

  return <StarWrapper>{tempStars}</StarWrapper>;
};

export default Star;
