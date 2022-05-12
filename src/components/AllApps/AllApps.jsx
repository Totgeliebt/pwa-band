import React from "react";
import {PageContainer, StyledBackground} from "../styles/PageContainer";
import AppVisitorsItem from "./AppVisitorsItem";

const AllApps = () => {

  const content = [
    {
      id: 1,
      appTitle: "lamoda.ru",
      visitorsChartData: {},
      rating: 144,
    },
    {
      id: 2,
      appTitle: "telegram.ru",
      visitorsChartData: {},
      rating: 10,
    },
    {
      id: 3,
      appTitle: "petshop.ru",
      visitorsChartData: {},
      rating: 57,
    },

  ];
  return (
    <StyledBackground>
    <PageContainer>
      <h3>Все приложения</h3>
      {content.map((app, id) => (
        <AppVisitorsItem key={id} app={app} />
      ))}
    </PageContainer>
    </StyledBackground>
  );
};

export default AllApps;
