import React from 'react';
import {PageContainer} from "../../components/styles/PageContainer";
import ConversionDownloads from "./ConversionDownloads";
import {StyledStatisticsMenu} from "../../components/styles/StyledStatisticsMenu";
import ChartByWeek from "../../components/Charts/ChartByWeek";
import {Flex} from "../../components/styles/Flex";

const Statistics = () => {
  return (
    <Flex fd='column'>
    <PageContainer >
      <h3>Статистика</h3>
      <StyledStatisticsMenu>
      <ul>
        <li>Вчера</li>
        <li>Сегодня</li>
        <li className='active'>Неделя</li>
        <li>Месяц</li>
        <li>6-12 апреля </li>
      </ul>
        <div className='users'>Пользователи</div>
      </StyledStatisticsMenu>
      <ChartByWeek/>
    </PageContainer>
    <ConversionDownloads/>
    </Flex>
  );
};

export default Statistics;