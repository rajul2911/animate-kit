import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import MainPage from "./pages/MainPage";
import { Analytics } from "@vercel/analytics/react";
import PageAnimationRoutes from "./RouteConfig/PageAnimationRoutes";
import ScrollAnimationRoute from "./RouteConfig/ScrollAnimationRoute";
import CursorAnimationRoutes from "./RouteConfig/CursorAnimationRoutes";

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
        <Route path="/" element={<MainPage />} />

        <Route
          path="/page-animation/*"
          element={<PageAnimationRoutes />}
        />

        <Route
          path="/scroll-animation/*"
          element={<ScrollAnimationRoute />}
        />
        <Route
          path="/cursor-effects/*"
          element={<CursorAnimationRoutes />}
        />
      </Routes>

      <Analytics />
    </>
  );
};

export default App;