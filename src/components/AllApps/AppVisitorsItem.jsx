import React, {useState} from 'react';
import trashIcon from '../../assets/images/trash-icon.svg'
import copyIcon from '../../assets/images/copy-icon.svg'
import {StyledAppVisitorsItem} from "../styles/StyledAppVisitorsItem";
import {Flex} from "../styles/Flex";

import MyChart from "../Charts/MyChart";



const AppVisitorsItem = ({ app: {id, appTitle, visitorsChartData, rating}}) => {

  return (

    <StyledAppVisitorsItem>
      <div>{appTitle}</div>
      <Flex >
        <div className='number'>{rating}</div>
      <div className='chart'>
      <MyChart/>
      </div>
      <img src={copyIcon} alt="copy"/>
      <img src={trashIcon} alt="delete"/>
      </Flex>
    </StyledAppVisitorsItem>
  );
};

export default AppVisitorsItem;