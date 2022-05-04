import React from 'react';
import {StyledMainScreen} from "../styles/StyledMainScreen";
import AllApps from "../../pages/AllApps/AllApps";
import MyChart from "../MyChart";
import Preview from "../../pages/Preview";


const MainScreen = () => {
  return (

    <StyledMainScreen>
      {/*<AllApps/>*/}
      <Preview/>
    </StyledMainScreen>

  );
};

export default MainScreen;