import React from "react";

import { Hero, FeaturedProducts } from "../../components";
import { HomeWrapper } from "./HomeElements";

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <FeaturedProducts />
    </HomeWrapper>
  );
};

export default Home;
