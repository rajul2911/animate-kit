import React from "react";
import { Route, Routes } from "react-router-dom";
import PageAnimationOne from "../components/PageAnimationAll/PageAnimationOne/PageAnimationOne";
import PageAnimationTwo from "../components/PageAnimationAll/PageAnimationTwo/PageAnimationTwo";
import PageAnimationTHree from "../components/PageAnimationAll/PageAnimationThree/PageAnimationTHree";
import PageAnimation from "../pages/CardsMainANimation/PageAnimation";

const PageAnimationRoutes = () => {
  return (
    <Routes>
      {/* /page-animation */}
      <Route index element={<PageAnimation />} />

      <Route path="page-animation-one" element={<PageAnimationOne />}>
        <Route index element={<HomeOne />} />

        <Route path="about-one" element={<AboutOne />} />

        <Route path="contact-one" element={<ContactOne />} />
      </Route>

      <Route path="page-animation-two" element={<PageAnimationTwo />}>
        <Route index element={<HomeOne />} />

        <Route path="about-two" element={<AboutOne />} />

        <Route path="contact-two" element={<ContactOne />} />
      </Route>

      <Route path="page-animation-three" element={<PageAnimationTHree />}>
        <Route index element={<HomeOne />} />

        <Route path="about-three" element={<AboutOne />} />

        <Route path="contact-three" element={<ContactOne />} />
      </Route>
    </Routes>
  );
};

export default PageAnimationRoutes;