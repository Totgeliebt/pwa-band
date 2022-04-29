import React from "react";
import { StyledAllApps } from "../../components/styles/StyledAllApps";
import AppVisitorsItem from "./AppVisitorsItem";

const AllApps = () => {
  const content = [
    {
      id: 1,
      appTitle: "lamoda.ru",
      visitorsChart: "",
    },
    {
      id: 2,
      appTitle: "telegram.ru",
      visitorsChart: "",
    },
    {
      id: 3,
      appTitle: "petshop.ru",
      visitorsChart: "",
    },

  ];
  return (
    <StyledAllApps>
      <h3>Все приложения</h3>
      {content.map((app, id) => (
        <AppVisitorsItem key={id} app={app} />
      ))}
    </StyledAllApps>
  );
};

export default AllApps;
