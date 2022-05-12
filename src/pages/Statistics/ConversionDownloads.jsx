import React from 'react';
import {PageContainer} from "../../components/styles/PageContainer";
import {StyledTable} from "../../components/styles/StyledTable";

const ConversionDownloads = ({data}) => {

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