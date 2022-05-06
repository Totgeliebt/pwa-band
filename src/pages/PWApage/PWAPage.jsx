import React from 'react';
import Header from "../../components/Header/Header";
import {Flex} from "../../components/styles/Flex";

import Preview from "../Preview";
import PwaMenu from "../../components/PwaMenu/PwaMenu";
import {StyledBackground} from "../../components/styles/PageContainer";

const PwaPage = () => {
  return (
    <div>
      <Header />
      <Flex>
        <PwaMenu/>
        <StyledBackground>
         <Preview/>
        </StyledBackground>
      </Flex>
    </div>
  );
};

export default PwaPage;