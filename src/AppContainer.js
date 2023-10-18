import React, { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { MAIN_NAVIGATION } from "./routes";
import MainLayout from "./components/MainLayout";

const AppContainer = () => {
  const RouteView = useCallback(
    (routeData, isChild = false) =>
      routeData.map(({ key, Component, path, routes }) => (
        <Route
          key={key}
          element={
            <Suspense>
              <Component />
            </Suspense>
          }
          path={path}
        >
          {routes && RouteView(routes, true)}
        </Route>
      )),
    []
  );

  return (
    <main>
      <Routes>
        <Route element={<MainLayout />}>{RouteView(MAIN_NAVIGATION)}</Route>
      </Routes>
    </main>
  );
};

export default AppContainer;
