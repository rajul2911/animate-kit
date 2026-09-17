import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollOne from "../components/ScrollAnimationAll/Parallax Scroll/ScrollOne";
import ScrollCard from "../components/ScrollAnimationAll/CardScrollParallax/ScrollCard";
import ZoomParallax from "../components/ScrollAnimationAll/ZoomParallax/ZoomParallax";
import TextGradient from "../components/ScrollAnimationAll/TextGradient/TextGradient";
import ScrollAnimation from "../pages/CardsMainANimation/ScrollAnimation";

const ScrollAnimationRoute = () => {
  return (
    <>
      <Routes>
        <Route index element={<ScrollAnimation />} />

        <Route path="scroll-animation-one" element={<ScrollOne />} />

        <Route path="scroll-animation-two" element={<ScrollCard />} />
        <Route path="scroll-animation-three" element={<ZoomParallax />} />
        <Route path="scroll-animation-four" element={<TextGradient />} />
      </Routes>
    </>
  );
};

export default ScrollAnimationRoute;
