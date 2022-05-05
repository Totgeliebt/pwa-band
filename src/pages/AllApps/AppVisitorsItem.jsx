import React, {useState} from 'react';
import trashIcon from '../../assets/images/trash-icon.svg'
import copyIcon from '../../assets/images/copy-icon.svg'
import {StyledAppVisitorsItem} from "../../components/styles/StyledAppVisitorsItem";
import {Flex} from "../../components/styles/Flex";
import { Line } from 'react-chartjs-2';
import MyChart from "../../components/Charts/MyChart";


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