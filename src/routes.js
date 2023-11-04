import React from "react";
/*  file constants routes */

// constant main navigation
export const MAIN_NAVIGATION = [
  {
    key: "home",
    path: "/",
    title: "",
    Component: React.lazy(() => import("./pages/Home")),
  },
  {
    key: "about",
    path: "/about",
    title: "",
    Component: React.lazy(() => import("./pages/About")),
  },
  {
    key: "about",
    path: "/shop",
    title: "",
    Component: React.lazy(() => import("./pages/Shop")),
  },
];
