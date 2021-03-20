import React from "react";

import { FooterWrapper } from "./FooterElements";

const Footer = () => {
  return (
    <FooterWrapper>
      &copy; Copyright - Kitchen Store - {new Date().getFullYear()}{" "}
    </FooterWrapper>
  );
};

export default Footer;
