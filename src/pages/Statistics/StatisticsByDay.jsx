import React from 'react';
import {Flex} from "../../components/styles/Flex";
import {PageContainer, StyledBackground} from "../../components/styles/PageContainer";
import {StyledStatisticsMenu} from "../../components/styles/StyledStatisticsMenu";
import {NavLink} from "react-router-dom";
import ConversionDownloads from "./ConversionDownloads";
import ChartByPeriod from "../../components/Charts/ChartByPeriod";

const StatisticsByDay = () => {
  const chartData = {
    labels:["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "24:00"],
    clicksData: [10, 30, 30, 20, 30, 30, 30, 45, 20],
    downloadsData: [10, 20, 20, 10, 20, 20, 20, 15, 25]
  }
  const dataByDay = [
    {time: '06.04.2022',
      clicks: 10,
      downloads: 10,
      lcr: '100%',
    },
    {time: '07.04.2022',
      clicks: 30,
      downloads: 20,
      lcr: '66%',
    },
    {time: '08.04.2022',
      clicks: 30,
      downloads: 20,
      lcr: '66%',
    },
    {time: '09.04.2022',
      clicks: 10,
      downloads: 10,
      lcr: '100%',
    }, {time: '10.04.2022',
      clicks: 30,
      downloads: 20,
      lcr: '66%',
    }
    ,{time: '11.04.2022',
      clicks: 30,
      downloads: 20,
      lcr: '66%',
    }
    ,{time: '12.04.2022',
      clicks: 30,
      downloads: 20,
      lcr: '66%',
    },
  ]
  return (
    <StyledBackground>
      <Flex fd='column'>
        <PageContainer >
          <h3>Статистика</h3>
          <StyledStatisticsMenu>
            <ul>
              <li><NavLink to='/statistics/yesterday'>Вчера</NavLink></li>
              <li><NavLink to='/statistics/today'>Сегодня</NavLink></li>
              <li><NavLink to='/statistics/week'>Неделя</NavLink></li>
              <li><NavLink to='/statistics/month'>Месяц</NavLink></li>
              <li><NavLink to='/statistics/calendar'>6-12 апреля</NavLink> </li>
            </ul>
            <div className='users'>Пользователи</div>
          </StyledStatisticsMenu>
          <ChartByPeriod chartData={chartData} />
        </PageContainer>
        <ConversionDownloads data={dataByDay}/>
      </Flex>
    </StyledBackground>
  );
};

export default StatisticsByDay;