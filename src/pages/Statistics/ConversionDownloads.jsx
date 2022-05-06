import React from 'react';
import {PageContainer} from "../../components/styles/PageContainer";
import {StyledTable} from "../../components/styles/StyledTable";

const ConversionDownloads = () => {
  const data = [
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
    <PageContainer>
      <h3>Конверсия в скачивания</h3>
        <StyledTable>
          <thead>
          <tr>
            <th>Дата</th>
            <th>Клики</th>
            <th>Скачивания</th>
            <th>LCR</th>
          </tr>
          </thead>
          <tbody>
          {data.map((item,id) => (
            <tr key={id}>
              <td>{item.time}</td>
              <td>{item.clicks}</td>
              <td>{item.downloads}</td>
              <td>{item.lcr}</td>
            </tr>
          ))}
          </tbody>
        </StyledTable>
    </PageContainer>
  );
};

export default ConversionDownloads;