import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes} from "./router";

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map(routes =>
        <Route element={<routes.component/>} path={routes.path}  key={routes.path} />
      )}
      <Route
        path="*"
        element={<Navigate to="/"/>}
      />
    </Routes>
  );
};

export default AppRouter;