import React from "react";
import {
  PageContainer,
} from "../../components/styles/PageContainer";
import ConversionDownloads from "./ConversionDownloads";
import { StyledStatisticsMenu } from "../../components/styles/StyledStatisticsMenu";
import { Flex } from "../../components/styles/Flex";
import { NavLink } from "react-router-dom";
import ChartByPeriod from "../../components/Charts/ChartByPeriod";

const Statistics = () => {
  const chartData = {
    labels: ["6 апр", "7 апр", "8 апр", "9 апр", "10 апр", "11 апр", "12 апр"],
    clicksData: [10, 30, 30, 20, 30, 30, 30],
    downloadsData: [10, 20, 20, 10, 20, 20, 20],
  };

  const dataByDay = [
    { time: "06.04.2022", clicks: 10, downloads: 10, lcr: "100%" },
    { time: "07.04.2022", clicks: 30, downloads: 20, lcr: "66%" },
    { time: "08.04.2022", clicks: 30, downloads: 20, lcr: "66%" },
    { time: "09.04.2022", clicks: 10, downloads: 10, lcr: "100%" },
    { time: "10.04.2022", clicks: 30, downloads: 20, lcr: "66%" },
    { time: "11.04.2022", clicks: 30, downloads: 20, lcr: "66%" },
    { time: "12.04.2022", clicks: 30, downloads: 20, lcr: "66%" },
  ];
  return (
    <Flex fd="column">
      <PageContainer>
        <h3>Статистика</h3>
        <StyledStatisticsMenu>
          <ul>
            <li>
              <NavLink to="/statistics/yesterday">Вчера</NavLink>
            </li>
            <li>
              <NavLink to="/statistics/today">Сегодня</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Неделя</NavLink>
            </li>
            <li>
              <NavLink to="/statistics/month">Месяц</NavLink>
            </li>
            <li>
              <NavLink to="/statistics/calendar">6-12 апреля</NavLink>
            </li>
          </ul>
          <div className="users">Пользователи</div>
        </StyledStatisticsMenu>
        <ChartByPeriod chartData={chartData} />
      </PageContainer>
      <ConversionDownloads data={dataByDay} />
    </Flex>
  );
};

export default Statistics;
