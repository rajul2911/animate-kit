import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { Analytics } from "@vercel/analytics/react";
import PageAnimationRoutes from "./RouteConfig/PageAnimationRoutes";
import ScrollAnimationRoute from "./RouteConfig/ScrollAnimationRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/page-animation/*" element={< PageAnimationRoutes/>} />
        <Route path="/scroll-animation/*" element={< ScrollAnimationRoute/>} />
        
      </Routes>
      <Analytics />
    </>
  );
};

export default App;
