import React from 'react';
import Header from "../../../components/Header/Header";
import {Flex} from "../../../components/styles/Flex";
import PwaMenu from "../../../components/PwaMenu/PwaMenu";
import Statistics from "../Statistics";
import {StyledBackground} from "../../../components/styles/PageContainer";

const StatisticsByWeek = () => {
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

export default StatisticsByWeek;