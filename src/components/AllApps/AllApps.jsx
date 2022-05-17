import React from "react";
import {PageContainer} from "../styles/PageContainer";
import AppVisitorsItem from "./AppVisitorsItem";

const AllApps = () => {

  const content = [{
    "id" : "45d56da9-6358-43af-b915-328d7c8d9163",
    "name" : "6f3c52a2-c032-4e9e-9da1-db75e7dc9e7f",
    "url" : "https://google.com",
    "baseChart" : [ 15, 48, 19, 34, 41, 19, 12 ]
  }, {
    "id" : "a6e56d32-26f4-4720-8137-eafe48a37173",
    "name" : "f6e76b0d-ba27-40f8-87be-0453b885ab1a",
    "url" : "https://google.com",
    "baseChart" : [ 14, 49, 21, 11, 49, 20, 9 ]
  }, {
    "id" : "6d75a8f1-1cd8-4d09-a543-cb21beb39981",
    "name" : "002194b6-97c0-483f-9cbe-c653336b74c7",
    "url" : "https://google.com",
    "baseChart" : [ 29, 14, 35, 22, 42, 38, 43 ]
  }, {
    "id" : "e9873497-0385-4b16-bdb2-7d2192b4f0d6",
    "name" : "b4de648f-a2b9-4d41-9114-d43e354eacd9",
    "url" : "https://google.com",
    "baseChart" : [ 36, 41, 18, 38, 31, 27, 24 ]
  }, {
    "id" : "f406ae3a-df5f-4a10-8d46-aad7f2d1f4f5",
    "name" : "ba34f701-0a2f-4d8c-bae5-d808a8d41595",
    "url" : "https://google.com",
    "baseChart" : [ 33, 34, 35, 44, 8, 41, 13 ]
  }]
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
