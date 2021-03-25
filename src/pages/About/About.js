import React from "react";

// import AboutPhoto from "../../images/kitchen-1.jpg";
import AboutFilm from "../../videos/video1.mp4";

import {
  AboutWrapper,
  // AboutImg,
  AboutVideo,
  AboutContainer,
  AboutTitle,
  AboutText,
} from "./AboutElements";

const About = () => {
  return (
    <AboutWrapper>
      {/* <AboutImg src={AboutPhoto}></AboutImg> */}
      <AboutVideo autoPlay loop muted>
        <source src={AboutFilm} type='video/mp4' />
      </AboutVideo>
      <AboutContainer>
        <AboutTitle>Our Story</AboutTitle>
        <AboutText>
          Kitchen Store is a leading retailer in housewares and home decor. Our
          concept is simple - buy direct and pass the savings onto our
          customers. We're obsessed with finding modern, unique solutions that
          truly help make everyday life easier and better.
        </AboutText>
        <AboutText>
          With our incredible savings, superior selection and exceptional
          service, we've been voted one of the best places to shop again and
          again. We are very proud of the fact that most of our awards have been
          honouring our great staff and customer service. In return, we're proud
          to have loyal, enthusiastic customers who keep coming back and we love
          welcoming new people to our in-store and online experience.
        </AboutText>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
