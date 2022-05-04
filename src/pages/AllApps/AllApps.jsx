import React, {useState} from "react";
import { PageContainer } from "../../components/styles/PageContainer";
import AppVisitorsItem from "./AppVisitorsItem";

const AllApps = () => {

  const content = [
    {
      id: 1,
      appTitle: "lamoda.ru",
      visitorsChartData: {},
    },
    {
      id: 2,
      appTitle: "telegram.ru",
      visitorsChartData: {},
    },
    {
      id: 3,
      appTitle: "petshop.ru",
      visitorsChartData: {},
    },

  ];
  return (
    <PageContainer>
      <h3>Все приложения</h3>
      {content.map((app, id) => (
        <AppVisitorsItem key={id} app={app} />
      ))}
    </PageContainer>
  );
};

export default AllApps;
