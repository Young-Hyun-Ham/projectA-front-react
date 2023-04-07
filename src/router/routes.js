// src/router/AppRoutes.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../routesConfig";
import PrivateRoute from "./privateRoute";
import { useAuth } from '../config';

const AppRoutes = () => {
  // 페이지 로드 시 로컬 스토리지에서 인증 토큰 정보 확인
  const { isAuthenticated } = useAuth();
  console.log("access_token ====> ", localStorage.getItem("access_token"));
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
                    isAuthenticated={isAuthenticated}
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
