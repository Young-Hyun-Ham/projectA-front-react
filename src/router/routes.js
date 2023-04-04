// src/router/AppRoutes.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import config from '../config';
import { routes } from "../routesConfig";
import PrivateRoute from "./privateRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route exact
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {route.private ? (
                  <PrivateRoute
                    component={lazy(() => import(`../views/${route.component}`))}
                    token={config.ACCESS_TOKEN}
                  />
                ) : (
                  React.createElement(lazy(() => import(`../views/${route.component}`)))
                )}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
