
import React, { useEffect } from "react";
import { Route, Routes, Outlet, useLocation } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Layout from "./pages/Layout";

import { Analytics } from "@vercel/analytics/react";

import PageAnimationRoutes from "./RouteConfig/PageAnimationRoutes";
import ScrollAnimationRoute from "./RouteConfig/ScrollAnimationRoute";
import CursorAnimationRoutes from "./RouteConfig/CursorAnimationRoutes";
import MenuAnimationRoutes from "./RouteConfig/MenuAnimationRoutes";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>

        <Route path="/page-animation/*" element={<PageAnimationRoutes />} />

        <Route path="/scroll-animation/*" element={<ScrollAnimationRoute />} />

        <Route path="/cursor-effects/*" element={<CursorAnimationRoutes />} />

        <Route path="/menu-animation/*" element={<MenuAnimationRoutes />} />
      </Routes>

      <Analytics />
    </>
  );
};

export default App;
