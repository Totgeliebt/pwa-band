import React from 'react';
import {PageContainer} from "../../components/styles/PageContainer";
import ConversionDownloads from "./ConversionDownloads";
import {StyledStatisticsMenu} from "../../components/styles/StyledStatisticsMenu";
import ChartByWeek from "../../components/Charts/ChartByWeek";
import {Flex} from "../../components/styles/Flex";
import {NavLink} from "react-router-dom";

const Statistics = () => {
  return (
    <Flex fd='column'>
    <PageContainer >
      <h3>Статистика</h3>
      <StyledStatisticsMenu>
      <ul>
        <li><NavLink to='/statisticsByYesterday'>Вчера</NavLink></li>
        <li><NavLink to='/statisticsByDay'>Сегодня</NavLink></li>
        <li><NavLink to='/statisticsByWeek'>Неделя</NavLink></li>
        <li><NavLink to='/statisticsByMonth'>Месяц</NavLink></li>
        <li><NavLink to='/statisticsByCalendar'>6-12 апреля</NavLink> </li>
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