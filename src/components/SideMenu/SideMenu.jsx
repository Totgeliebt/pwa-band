import React from "react";
import Button from "./Button";
import { StyledSideMenu } from "../styles/StyledSideMenu";
import Search from "./Search";
import MenuList from "./MenuList";

const SideMenu = () => {
  return (
    <section>
      <StyledSideMenu>
        <Button />
        <Search />
        <MenuList />
      </StyledSideMenu>
    </section>
  );
};

export default SideMenu;
