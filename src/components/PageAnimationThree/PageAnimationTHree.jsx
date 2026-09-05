import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useOutlet } from "react-router-dom";

import { text, curve, translate } from "./AnimationThree";

const routes = {
  "/page-animation/page-animation-three": "Home",
  "/page-animation/page-animation-three/about-three": "About",
  "/page-animation/page-animation-three/contact-three": "Contact",
};

const anim = (variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

const PageAnimationTHree = () => {
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
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "white",
      }}
    >
      {/* Black background */}
      <div
        className="fixed left-0 top-0 h-[calc(100vh+600px)] w-screen pointer-events-none"
        style={{
          backgroundColor: "black",
          opacity: dimensions.width === null ? 1 : 0,
          transition: "opacity 0s linear 0.1s",
        }}
      />

      {/* Route name */}
      <motion.p
        key={location.pathname}
        className="absolute left-1/2 top-[40%] z-[3] -translate-x-1/2 text-center text-[46px] text-white"
        {...anim(text)}
        fill="black"
      >
        {routes[location.pathname] || ""}
      </motion.p>

      {/* SVG Curve */}
      {dimensions.width !== null && (
        <SVG width={dimensions.width} height={dimensions.height} />
      )}

      {/* Navigation */}
      <header className="relative z-[1000] flex flex-col p-10">
        <span className="text-[24px] font-black uppercase">
          Page Animation Three
        </span>

        <nav className="mt-4 flex gap-4">
          <Link to="." className="text-[18px] font-semibold">
            Home
          </Link>

          <Link to="about-three" className="text-[18px] font-semibold">
            About
          </Link>

          <Link to="contact-three" className="text-[18px] font-semibold">
            Contact
          </Link>
        </nav>
      </header>

      {/* Page content */}
      <main className="relative z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="relative"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            {outlet}
            <SVG width={dimensions.width} height={dimensions.height} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

const SVG = ({ width, height }) => {
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
      className="fixed left-0 top-0 z-[2] h-[calc(100vh+600px)] w-screen pointer-events-none"
      viewBox={`0 0 ${width} ${height + 600}`}
      preserveAspectRatio="none"
    >
      <motion.path {...anim(curve(initialPath, targetPath))} fill="black" />
    </motion.svg>
  );
};

export default PageAnimationTHree;
