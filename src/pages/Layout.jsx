import React, { useEffect, useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import NavBar from "./NavBar";
import {
  text,
  curve,
  translate,
} from "../components/PageAnimationAll/PageAnimationThree/AnimationThree";
import { AnimatePresence, motion } from "motion/react";

const routes = {
  "/": "Home",
  "/about": "About",
};

const anim = (variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

const Layout = () => {
  const location = useLocation();
  const outlet = useOutlet();

  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <motion.p
        key={location.pathname}
        className="absolute left-1/2 top-[40%] z-[3] -translate-x-1/2 text-center text-[46px] text-white"
        {...anim(text)}
      >
        {routes[location.pathname] || ""}
      </motion.p>
      {/* <div
        className="fixed left-0 top-0 z-[1] h-[calc(100vh+600px)] w-screen pointer-events-none"
        style={{
          backgroundColor: "black",
          opacity: dimensions.width === null ? 1 : 0,
          transition: "opacity 0s linear 0.1s",
        }}
      /> */}

      <NavBar />

      <main className="relative z-0">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} className="relative">
            {outlet}

            {dimensions.width !== null && (
              <SVG width={dimensions.width} height={dimensions.height} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;

const SVG = ({ width, height }) => {
  if (width === null || height === null) {
    return null;
  }

  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg
      {...anim(translate)}
      className="fixed left-0 top-0 z-[999] h-[calc(100vh+600px)] w-screen pointer-events-none"
      viewBox={`0 0 ${width} ${height + 600}`}
      preserveAspectRatio="none"
    >
      <motion.path {...anim(curve(initialPath, targetPath))} fill="black" />
    </motion.svg>
  );
};
