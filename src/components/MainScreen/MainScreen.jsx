import React from 'react';
import {StyledMainScreen} from "../styles/StyledMainScreen";
import AllApps from "../../pages/AllApps/AllApps";
import MyChart from "../Charts/MyChart";
import Preview from "../../pages/Preview";
import Statistics from "../../pages/Statistics/Statistics";


const MainScreen = () => {
  return (

    <StyledMainScreen>
      {/*<AllApps/>*/}
      <Statistics/>
      {/*<Preview/>*/}
    </StyledMainScreen>

  );
};

export default MainScreen;