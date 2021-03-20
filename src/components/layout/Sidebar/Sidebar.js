import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarIcon,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import { navbarData } from "../../../data/navbarData";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <SidebarWrapper isSidebarOpen={isSidebarOpen} onClick={toggleSidebar}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarContainer>
        <SidebarMenu>
          {navbarData.map((item) => (
            <SidebarLink key={item.id} to={item.path}>
              <SidebarIcon>{item.icon}</SidebarIcon> {item.text}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/cart'>Cart</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
