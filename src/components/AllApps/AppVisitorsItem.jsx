import React, {useState} from 'react';
import trashIcon from '../../assets/images/trash-icon.svg'
import copyIcon from '../../assets/images/copy-icon.svg'
import {StyledAppVisitorsItem} from "../styles/StyledAppVisitorsItem";
import {Flex} from "../styles/Flex";
import AppChart from "../Charts/AppChart";

const AppVisitorsItem = ({ app: {id, name, baseChart, rating}}) => {
//rating = sum of all numbers in base chart
  return (
    <StyledAppVisitorsItem>
      <div>{name}</div>
      <Flex >
        <div className='number'>{rating}</div>
      <div className='chart'>
      <AppChart baseChart={baseChart}/>
      </div>
      <img src={copyIcon} alt="copy"/>
      <img src={trashIcon} alt="delete"/>
      </Flex>
    </StyledAppVisitorsItem>
  );
};

export default AppVisitorsItem;