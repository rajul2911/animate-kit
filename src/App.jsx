import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PageAnimation from "./pages/PageAnimation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="page-animation" element={<PageAnimation />} />
    </Routes>
  );
};

export default App;
