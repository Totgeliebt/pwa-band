import React from "react";
import Button from "./Button";
import {MenuWrapper} from "../styles/StyledSideMenu";
import Search from "./Search";
import MenuList from "./MenuList";
import PwaMenu from "../PwaMenu/PwaMenu";

const SideMenu = () => {
  return (
    <section>
      <MenuWrapper>
        <Button />
        <Search />
        <MenuList />
      </MenuWrapper>
    </section>
  );
};

export default SideMenu;
