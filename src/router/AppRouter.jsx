import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Preview from "../pages/Preview";
import AllApps from "../components/AllApps/AllApps";
import Statistics from "../pages/Statistics/Statistics";
import StatisticsByDay from "../pages/Statistics/StatisticsByDay";
import StatisticsByMonth from "../pages/Statistics/StatisticsByMonth";
import Editing from "../pages/Editing";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllApps/>} />
        <Route path="preview" element={<Preview/>} />
        <Route path="statistics" element={<Statistics/>}/>
          <Route path="statistics/week" element={<Statistics/>} />
          <Route path="statistics/today" element={<StatisticsByDay/> } />
          <Route path="statistics/month" element={<StatisticsByMonth />} />
        <Route path="editing" element={<Editing/> } />
      </Route>
    </Routes>
  );
};

export default AppRouter;
