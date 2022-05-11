import React from 'react';
import Header from "../../components/Header/Header";
import {Flex} from "../../components/styles/Flex";
import PwaMenu from "../../components/PwaMenu/PwaMenu";
import Editing from "../Editing";
import {StyledSideMenu} from "../../components/styles/StyledSideMenu";
import {StyledBackground} from "../../components/styles/PageContainer";

const EditPage = () => {
  return (
    <div>
      <Header />
      <Flex>
        <PwaMenu/>
        <StyledBackground>
          <Editing/>
        </StyledBackground>
      </Flex>
    </div>
  );
};

export default EditPage;