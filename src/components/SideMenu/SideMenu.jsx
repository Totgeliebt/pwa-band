import React from "react";
import Button from "./Button";
import { MenuWrapper, StyledSideMenu } from "../styles/StyledSideMenu";
import Search from "./Search";
import MenuList from "./MenuList";

const SideMenu = () => {
  return (
    <MenuWrapper>
      <StyledSideMenu>
        <Button text='+ Добавить PWA' width={'227px'} margin={'16px'}/>
        <Search />
        <MenuList />
      </StyledSideMenu>
    </MenuWrapper>
  );
};

export default SideMenu;
