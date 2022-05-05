import React from 'react';
import {PageContainer} from "../../components/styles/PageContainer";
import ConversionDownloads from "./ConversionDownloads";
import {StyledStatisticsMenu} from "../../components/styles/StyledStatisticsMenu";

const Statistics = () => {
  return (
    <>
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
      </StyledStatisticsMenu>
    </PageContainer>
    <ConversionDownloads/>
    </>
  );
};

export default Statistics;