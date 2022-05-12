import React from "react";
import Header from "./Header/Header";
import SideMenu from "./SideMenu/SideMenu";
import { Outlet } from "react-router-dom";
import { Flex } from "./styles/Flex";
import { StyledBackground } from "./styles/PageContainer";
import PwaMenu from "./PwaMenu/PwaMenu";

const Layout = () => {
  // if path='/' show sidemenu otherwise show pwamenu

  return (
    <>
      <Header />
      <Flex>
        {/*{path="/" ? <SideMenu />: <PwaMenu/>}*/}

          <Outlet />

      </Flex>
    </>
  );
};

export default Layout;
