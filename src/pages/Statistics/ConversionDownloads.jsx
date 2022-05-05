import React from 'react';
import {PageContainer} from "../../components/styles/PageContainer";
import {StyledTable} from "../../components/styles/StyledTable";

const ConversionDownloads = () => {
  return (
    <PageContainer>
      <h3>Конверсия в скачивания</h3>
        <StyledTable>
          <tr>
            <th>Дата</th>
            <th>Клики</th>
            <th>Скачивания</th>
            <th>LCR</th>
          </tr>
          <tr>
            <td>06.04.2022</td>
            <td>10</td>
            <td>10</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>07.04.2022</td>
            <td>30</td>
            <td>20</td>
            <td>66%</td>
          </tr>
          <tr>
          <td>08.04.2022</td>
          <td>30</td>
          <td>20</td>
          <td>66%</td>
        </tr>
          <tr>
          <td>09.04.2022</td>
          <td>10</td>
          <td>10</td>
          <td>100%</td>
        </tr>
          <tr>
            <td>10.04.2022</td>
            <td>30</td>
            <td>20</td>
            <td>66%</td>
          </tr>
          <tr>
            <td>11.04.2022</td>
            <td>30</td>
            <td>20</td>
            <td>66%</td>
          </tr>
          <tr>
            <td>12.04.2022</td>
            <td>30</td>
            <td>20</td>
            <td>66%</td>
          </tr>
        </StyledTable>

    </PageContainer>
  );
};

export default ConversionDownloads;