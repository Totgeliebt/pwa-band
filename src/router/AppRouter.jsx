import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Preview from "../pages/Preview";
import AllApps from "../components/AllApps/AllApps";
import Statistics from "../pages/Statistics/Statistics";
import StatisticsByDay from "../pages/Statistics/StatisticsByDay";
import StatisticsByMonth from "../pages/Statistics/StatisticsByMonth";
import SideMenu from "../components/SideMenu/SideMenu";
import PwaMenu from "../components/PwaMenu/PwaMenu";
import Editing from "../pages/Editing";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<><SideMenu /> <AllApps/></>} />
        <Route path="preview" element={<><PwaMenu/> <Preview/> </>} />
        <Route path="statistics" element={<><PwaMenu/> <Statistics/> </>}/>
          <Route path="statistics/week" element={<><PwaMenu/> <Statistics/> </>} />
          <Route path="statistics/today" element={<><PwaMenu/> <StatisticsByDay/> </> } />
          <Route path="statistics/month" element={<><PwaMenu/><StatisticsByMonth /></>} />
        <Route path="editing" element={<><PwaMenu/> <Editing/> </>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
