import React, { useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import { Outlet, useLocation, useOutlet } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {
  text,
  curve,
  translate,
} from "../components/PageAnimationAll/PageAnimationThree/AnimationThree";
import { AnimatePresence, motion } from "motion/react";

const menuSlide = {
  initial: {
    x: "calc(-100% - 100px)",
  },

  enter: {
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },

  exit: {
    x: "calc(-100% - 100px)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const buttonSlide = {
  closed: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },

  open: {
    x: 20,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const navContainer = {
  initial: {},

  enter: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },

  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const navItem = {
  initial: {
    x: -80,
    opacity: 0,
  },

  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },

  exit: {
    x: 80,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/parallax-scroll": "Parallax Scroll",
  "/card-parallax": "Card Parallax",
  "/zoom-parallax": "Zoom Parallax",
  "/text-gradient": "Text Gradient",
  "/perspective-scroll": "Perspective Scroll",
  "/mask-cursor": "Mask Cursor",
  "/sticky-cursor": "Sticky Cursor",
  "/sidebar-curve": "Sidebar Curve",
  "/sidebar-menu": "Sidebar Menu",
  "/page-one": "Page One",
  "/page-two": "Page Two",
  "/page-three": "Page Three",
};

const anim = (variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

const OverallPage = () => {
  const location = useLocation();
  const outlet = useOutlet();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden bg-background md:px-6 lg:px-8 xl:px-12 2xl:px-[120px]">
      <div
        className="fixed z-999 left-0 top-0 h-[calc(100vh+600px)] w-screen pointer-events-none"
        style={{
          backgroundColor: "black",
          opacity: dimensions.width === null ? 1 : 0,
          transition: "opacity 0s linear 0.1s",
        }}
      />
      {/* <AnimatePresence mode="wait"> */}
      <motion.p
        key={location.pathname}
        className="absolute left-1/2 top-[40%] z-[3] -translate-x-1/2 text-center text-[46px] text-white"
        {...anim(text)}
        fill="black"
      >
        {routes[location.pathname] || ""}
      </motion.p>
      {/* </AnimatePresence> */}

      {/* {dimensions.width !== null && (
        <SVG width={dimensions.width} height={dimensions.height} />
      )} */}

      {/* Mobile Header */}
      <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center border-b border-neutral-200 bg-white px-4 md:hidden">
        <motion.button
          type="button"
          variants={buttonSlide}
          animate={isSidebarOpen ? "open" : "closed"}
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#173b4d] hover:bg-[#f3f8f8]"
          aria-label="Open menu"
          // aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          <FiMenu className="text-[22px]" />
        </motion.button>

        <span className="ml-3 text-[18px] font-bold text-[#111827]">
          Animate Kit
        </span>
      </header>

      {/* Desktop / Tablet Sidebar */}
      <aside className="hidden h-screen shrink-0 md:block">
        <SideBar />
      </aside>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[50] bg-black/30 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* <div
          className="fixed inset-0 z-50 bg-black/30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="h-full w-[280px] max-w-[85vw] bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full flex-col">

              <div className="flex items-center justify-end px-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-[#52677a] hover:bg-[#f3f8f8]"
                  aria-label="Close menu"
                >
                  <FiX className="text-[22px]" />
                </button>
              </div>

              <div className="min-h-0 flex-1">
                <SideBar
                  onNavigate={() => setIsSidebarOpen(false)}
                />
              </div>

            </div>
          </div>
        </div> */}

            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              // className=" fixed right-0 top-0 z-[60] h-screen w-[320px] max-w-[85vw] bg-white shadow-2xl md:hidden"
              className="fixed left-0 top-0 z-[60] h-screen w-[320px] max-w-[85vw] bg-white shadow-2xl md:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <MobileMenuCurve />
              <button
                type="button"
                onClick={() => setIsSidebarOpen(false)}
                className="absolute right-4 top-4 z-[70] flex h-10 w-10 items-center justify-center rounded-lg text-[#173b4d] hover:bg-[#f3f8f8]"
                aria-label="Close menu"
              >
                <FiX className="text-[24px]" />
              </button>

              <motion.div
                variants={navContainer}
                initial="initial"
                animate="enter"
                exit="exit"
                className="relative flex h-full flex-col px-8 pb-10"
              >
                <motion.div
                  variants={navItem}
                  className="  border-neutral-200"
                />

                <motion.div
                  variants={navItem}
                  className="mt-8 min-h-0 flex-1 overflow-y-auto scrollbar-hide"
                >
                  <SideBar onNavigate={() => setIsSidebarOpen(false)} mobile />
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* <main className="min-w-0 flex-1 overflow-y-auto scrollbar-hide">
        <Outlet />
      </main> */}
      <main className="relative z-0 min-w-0 flex-1 overflow-y-auto scrollbar-hide">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="relative"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            {outlet}
            {dimensions.width !== null && dimensions.height !== null && (
              <SVG width={dimensions.width} height={dimensions.height} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default OverallPage;

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
      className="fixed left-0 top-0 z-[30] h-[calc(100vh+600px)] w-screen pointer-events-none"
      viewBox={`0 0 ${width} ${height + 600}`}
      preserveAspectRatio="none"
    >
      <motion.path {...anim(curve(initialPath, targetPath))} fill="#009a8d" />
    </motion.svg>
  );
};

const MobileMenuCurve = () => {
  const height = typeof window !== "undefined" ? window.innerHeight : 800;

  const initialPath = `
    M0 0
    L0 ${height}
    Q100 ${height / 2} 0 0
  `;

  const targetPath = `
    M0 0
    L0 ${height}
    Q-100 ${height / 2} 0 0
  `;

  const pathAnimation = {
    initial: {
      d: initialPath,
    },

    enter: {
      d: targetPath,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },

    exit: {
      d: initialPath,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <svg
      className="absolute right-[-100px] top-0 h-full w-[100px]"
      viewBox={`0 0 100 ${height}`}
      preserveAspectRatio="none"
    >
      <motion.path
        variants={pathAnimation}
        initial="initial"
        animate="enter"
        exit="exit"
        fill="white"
      />
    </svg>
  );
};
