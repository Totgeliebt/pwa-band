import React from "react";
import Header from "./Header/Header";
import SideMenu from "./SideMenu/SideMenu";
import {Outlet, useMatch} from "react-router-dom";
import { Flex } from "./styles/Flex";
import { StyledBackground } from "./styles/PageContainer";
import PwaMenu from "./PwaMenu/PwaMenu";

const Layout = () => {
  const match = useMatch("/");
  return (
    <>
      <Header />
      <Flex>
        {match ? <SideMenu />: <PwaMenu/>}
        <StyledBackground>
          <Outlet />
        </StyledBackground>
      </Flex>
    </>
  );
};

export default Layout;
