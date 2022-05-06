import React from 'react';
import Header from "../../components/Header/Header";
import {Flex} from "../../components/styles/Flex";
import SideMenu from "../../components/SideMenu/SideMenu";
import AllApps from "../../components/AllApps/AllApps";
import {StyledBackground} from "../../components/styles/PageContainer";

const FirstPage = () => {
  return (
    <div>
      <Header />
      <Flex>
        <SideMenu/>
        <StyledBackground>
       <AllApps/>
        </StyledBackground>
      </Flex>
    </div>
  );
};

export default FirstPage;