import React, { useEffect } from "react";
import { Route, Routes, Outlet, useLocation } from "react-router-dom";

import Layout from "./pages/Layout";

import { Analytics } from "@vercel/analytics/react";

import PageAnimationRoutes from "./RouteConfig/PageAnimationRoutes";
import ScrollAnimationRoute from "./RouteConfig/ScrollAnimationRoute";
import CursorAnimationRoutes from "./RouteConfig/CursorAnimationRoutes";
import MenuAnimationRoutes from "./RouteConfig/MenuAnimationRoutes";
import About from "./pages/About";
import SideBar from "./pages/SideBar/SideBar";
import OverallPage from "./pages/OverallPage";
import MainPage from "./pages/Home/MainPage";
import Page_Animation_Show from "./components/PageAnimationAll/PageAnimationOne/Page_Animation_Show";
import PageAnimationOne from "./components/PageAnimationAll/PageAnimationOne/PageAnimationOne";
import {
  HomeOne,
  AboutOne,
  ContactOne,
} from "../src/components/PageAnimationAll/PageNavbar";
import PageAnimationTwo from "./components/PageAnimationAll/PageAnimationTwo/PageAnimationTwo";
import PageTwo_show from "./components/PageAnimationAll/PageAnimationTwo/PageTwo_show";
import PageAnimationTHree from "./components/PageAnimationAll/PageAnimationThree/PageAnimationTHree";
import PageThree_Show from "./components/PageAnimationAll/PageAnimationThree/PageThree_Show";
import CardOne_show from "./components/ScrollAnimationAll/CardScrollParallax/CardOne_show";
import ScrollCard from "./components/ScrollAnimationAll/CardScrollParallax/ScrollCard";
import ScrollTwo_show from "./components/ScrollAnimationAll/Parallax Scroll/ScrollTwo_show";
import ScrollOne from "./components/ScrollAnimationAll/Parallax Scroll/ScrollOne";
import ScrollThree_Show from "./components/ScrollAnimationAll/ZoomParallax/ScrollThree_Show";
import ZoomParallax from "./components/ScrollAnimationAll/ZoomParallax/ZoomParallax";
import ScrollFour_Show from "./components/ScrollAnimationAll/TextGradient/ScrollFour_Show";
import TextGradient from "./components/ScrollAnimationAll/TextGradient/TextGradient";
import MenuOne_Show from "./components/MenuAnimation/MenuOne/MenuOne_Show";
import MenuOne from "./components/MenuAnimation/MenuOne/MenuOne";
import CursorOne_Show from "./components/CursorAnimation/Mask-Cursor/CursorOne_Show";
import CursorOne from "./components/CursorAnimation/Mask-Cursor/CursorOne";
import ScrollFive_Show from "./components/ScrollAnimationAll/Perspective-Section-Transition/ScrollFive_Show";
import PerspectiveScroll from "./components/ScrollAnimationAll/Perspective-Section-Transition/PerspectiveScroll";

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
        {/* Website with sidebar */}
        <Route element={<OverallPage />}>
          <Route path="/" element={<MainPage />} />
           <Route path="/about" element={<About />} />

            {/* PAGE ANIMATION */}
          <Route path="/page-one" element={<Page_Animation_Show />} />
          <Route path="/page-two" element={<PageTwo_show />} />
          <Route path="/page-three" element={<PageThree_Show />} />


          {/* SCROLL ANIMATION */}
          <Route path="/parallax-scroll" element={<ScrollTwo_show />} />
          <Route path="/card-parallax" element={<CardOne_show />} />
          <Route path="/zoom-parallax" element={<ScrollThree_Show />} />
          <Route path="/text-gradient" element={<ScrollFour_Show />} />
          <Route path="/perspective-scroll" element={<ScrollFive_Show />} />

          {/* MENU ANIMATION */}
          <Route path="/sidebar-curve" element={<MenuOne_Show />} />


          {/* CURSOR EFFECT */}
          <Route path="/mask-cursor" element={<CursorOne_Show />} />



          {/* 
          <Route
            path="/scroll-animation/*"
            element={<ScrollAnimationRoute />}
          />

          <Route path="/cursor-effects/*" element={<CursorAnimationRoutes />} />

          <Route path="/menu-animation/*" element={<MenuAnimationRoutes />} /> */}
        </Route>



        {/* Standalone animation */}

                    {/* PAGE ANIMATION */}

        <Route path="/page-one-live" element={<PageAnimationOne />}>
          <Route index element={<HomeOne />} />
          <Route path="about-one" element={<AboutOne />} />
          <Route path="contact-one" element={<ContactOne />} />
        </Route>

        <Route path="page-two-live" element={<PageAnimationTwo />}>
          <Route index element={<HomeOne />} />

          <Route path="about-two" element={<AboutOne />} />

          <Route path="contact-two" element={<ContactOne />} />
        </Route>

        <Route path="page-three-live" element={<PageAnimationTHree />}>
          <Route index element={<HomeOne />} />

          <Route path="about-two" element={<AboutOne />} />

          <Route path="contact-two" element={<ContactOne />} />
        </Route>

                      {/* SCROLL ANIMATION */}

        <Route path="parallax-scroll-live" element={<ScrollOne />}/>
        <Route path="card-parallax-live" element={<ScrollCard />}/>
        <Route path="zoom-parallax-live" element={<ZoomParallax />}/>
        <Route path="text-gradient-live" element={<TextGradient />}/>
        <Route path="perspective-scroll-live" element={<PerspectiveScroll />}/>

                  {/* MENU ANIMATION */}

        <Route path="sidebar-curve-live" element={<MenuOne />}/>

                  {/* CURSOR EFFECT */}

        <Route path="mask-cursor-live" element={<CursorOne />}/>


      </Routes>

      <Analytics />
    </>
  );
};

export default App;

{
  /* <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          

       

        <Route path="/page-animation/*" element={<PageAnimationRoutes />} />

        <Route path="/scroll-animation/*" element={<ScrollAnimationRoute />} />

        <Route path="/cursor-effects/*" element={<CursorAnimationRoutes />} />

        <Route path="/menu-animation/*" element={<MenuAnimationRoutes />} />
         </Route> */
}
