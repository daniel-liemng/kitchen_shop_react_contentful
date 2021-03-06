import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const NavbarWrapper = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 900;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavIcon = styled.span`
  margin-bottom: 0;
  margin-right: 5px;
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }

  &:hover {
    color: #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  /* background: #01bf71; */
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  position: relative;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
    color: #010606;
  }

  span {
    position: absolute;
    height: 20px;
    width: 20px;
    background: #cd853f;
    left: 40px;
    top: 5px;
    border-radius: 50%;
    text-align: center;
    padding-top: 1px;
    font-weight: bold;
    color: #000;
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  font-size: 1.7rem;
  color: #fff;
`;

// export const CartTotal = styled.div`
//   position: absolute;
//   width: 10px;
//   height: 10px;
//   border-radius: 5px;
// `;
