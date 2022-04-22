import React from 'react';
import {Flex} from "../components/styles/Flex";
import {StyledStatistics} from "../components/styles/StyledStatistics";

const Statistics = () => {
  return (
    <StyledStatistics>
      <h2>Статистика</h2>
      <Flex>
    <ul>
      <Flex>
      <li>Общая</li>
      <li>Инсталлы</li>
      <li>Лиды</li>
      <li>Клики</li>
      </Flex>
    </ul>
      <select name="" id="">
        <option value="">Сортировка</option>
      </select>
      </Flex>
    </StyledStatistics>
  );
};

export default Statistics;