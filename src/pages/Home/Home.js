import React from "react";

import { Hero, FeaturedProducts, Info } from "../../components";
import { HomeWrapper } from "./HomeElements";
import Img1 from "../../images/coffee-maker.jpg";
import Img2 from "../../images/cooker.jpg";
import Img3 from "../../images/mixer.jpg";

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <FeaturedProducts />
      <Info
        title='Make the coffee of your choice'
        text='Leave them on the counter for easy access.'
        btnLabel='Coffee Maker'
        imgPath={Img1}
        linkPath='coffee maker'
      />
      <Info
        imgRight
        title='Make the coffee of your choice'
        text='Leave them on the counter for easy access.'
        btnLabel='Cooker'
        imgPath={Img2}
        linkPath='cooker'
      />
      <Info
        title='Want to make a cake at home'
        text='Leave them on the counter for easy access.'
        btnLabel='Mixer'
        imgPath={Img3}
        linkPath='mixer'
      />
    </HomeWrapper>
  );
};

export default Home;
