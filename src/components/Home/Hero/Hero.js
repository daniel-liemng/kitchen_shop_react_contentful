import React, { useState, useRef, useEffect } from "react";

import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  SliderButtons,
  PrevArrow,
  NextArrow,
} from "./HeroElements";
import { Button } from "../../Shared/Button";
import { sliderData as slides } from "../../../data/sliderData";

const Hero = () => {
  // state
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  const timeout = useRef(null);

  // Auto sliding
  useEffect(() => {
    // Just run forward
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 5000);

    // Clear call back: clear timeout
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  // function
  const nextSlide = () => {
    // Clear timeout -> auto sliding
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    // NEXT: increase Current by 1; if the last slide -> set to 0
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    // Clear timeout -> auto sliding
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    // PREV: decrease Current by 1; if the first slide -> set to last slide
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => (
          <HeroSlide key={index}>
            {index === current && (
              <HeroSlider>
                <HeroImage src={slide.image} alt={slide.alt} />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <Button
                    to='/products'
                    primary='true'
                    css={`
                      max-width: 160px;
                    `}
                  >
                    Shop Now
                  </Button>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}

        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
