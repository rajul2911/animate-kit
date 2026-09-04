import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PageAnimation from "./pages/PageAnimation";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="page-animation" element={<PageAnimation />} />
      </Routes>
      <Analytics />
    </>
  );
};

export default App;
