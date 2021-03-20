import React from "react";

import {
  NavbarWrapper,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavIcon,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { navbarData } from "../../../data/navbarData";

const Navbar = ({ toggleSidebar }) => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavLogo to='/'>kitchen store</NavLogo>
        <MobileIcon onClick={toggleSidebar}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {navbarData.map((item) => (
            <NavItem key={item.id}>
              <NavLinks to={item.path}>
                <NavIcon>{item.icon}</NavIcon> {item.text}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/cart'>Cart</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
