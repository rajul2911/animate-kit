import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { Analytics } from "@vercel/analytics/react";
import PageAnimationRoutes from "./RouteConfig/PageAnimationRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/page-animation/*" element={< PageAnimationRoutes/>} />
      </Routes>
      <Analytics />
    </>
  );
};

export default App;
