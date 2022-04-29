import React from 'react';
import trashIcon from '../../assets/images/trash-icon.svg'
import copyIcon from '../../assets/images/copy-icon.svg'
import {StyledAppVisitorsItem} from "../../components/styles/StyledAppVisitorsItem";
import {Flex} from "../../components/styles/Flex";
const AppVisitorsItem = ({ app: {id, appTitle, visitorsChart}}) => {
  return (
    <StyledAppVisitorsItem>
      <div>{appTitle}</div>
      <Flex >
      <div className='chart'>
        {visitorsChart}
      </div>
      <img src={copyIcon} alt="copy"/>
      <img src={trashIcon} alt="delete"/>
      </Flex>
    </StyledAppVisitorsItem>
  );
};

export default AppVisitorsItem;