import React from "react";
import Button from "./Button";
import {MenuWrapper, StyledSideMenu} from "../styles/StyledSideMenu";
import Search from "./Search";
import MenuList from "./MenuList";

const SideMenu = () => {
  return (

        <MenuWrapper>
          <StyledSideMenu>
        <Button />
        <Search />
        <MenuList />
          </StyledSideMenu>
        </MenuWrapper>

  );
};

export default SideMenu;
