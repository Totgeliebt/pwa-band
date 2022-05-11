import React from 'react';
import Header from "../../../components/Header/Header";
import {Flex} from "../../../components/styles/Flex";
import PwaMenu from "../../../components/PwaMenu/PwaMenu";
import {StyledBackground} from "../../../components/styles/PageContainer";
import Statistics from "../Statistics";

const StatisticsByMonth = () => {
  return (
    <div>
      <Header />
      <Flex>
        <PwaMenu/>
        <StyledBackground>
          <Statistics/>
        </StyledBackground>
      </Flex>
    </div>
  );
};

export default StatisticsByMonth;