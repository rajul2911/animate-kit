import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useOutlet } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

const expand = {
  initial: {
    top: 0,
  },

  enter: (i) => ({
    top: "100vh",

    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },

    transitionEnd: {
      height: "0",
      top: "0",
    },
  }),

  exit: (i) => ({
    height: "100vh",

    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const PageAnimationTwo = () => {
  const location = useLocation();
  const outlet = useOutlet();

  const nbOfColumns = 5;

  return (
    <div className="relative min-h-screen">
      {/* PAGE CONTENT */}

      <header className="flex flex-col p-10">
        <div className="flex gap-4">
          <div className="mb-5 sm:mb-6">
            <Link
              to="/page-animation"
              className="group inline-flex items-center gap-1.5 rounded-lg border border-[#d7d7d7] bg-white px-3 py-2 text-xs font-semibold text-[#333] no-underline shadow-sm transition-all duration-200 hover:border-[#111] hover:bg-[#111] hover:text-white hover:shadow-md sm:gap-2 sm:px-3.5 sm:py-2.5 sm:text-sm"
            >
              <MdOutlineArrowBackIos className="text-[11px] transition-transform duration-200 group-hover:-translate-x-0.5 sm:text-xs" />

              <span>Back</span>
            </Link>
          </div>

          <span className="text-[24px] font-black uppercase">
            Page Animation Two
          </span>
        </div>

        <nav className="mt-4 flex gap-4">
          <Link to="." className="text-[18px] font-semibold">
            Home
          </Link>

          <Link to="about-two" className="text-[18px] font-semibold">
            About
          </Link>

          <Link to="contact-two" className="text-[18px] font-semibold">
            Contact
          </Link>
        </nav>
      </header>

      <main className="px-10">{outlet}</main>

      {/* PAGE TRANSITION */}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="fixed inset-0 z-[50] pointer-events-none"
        >
          {/* STAIRCASE COLUMN */}

          <div className="fixed left-0 top-0 flex h-screen w-screen pointer-events-none">
            {[...Array(nbOfColumns)].map((_, i) => (
              <motion.div
                key={i}
                variants={expand}
                custom={nbOfColumns - i}
                initial="initial"
                animate="enter"
                exit="exit"
                className="relative h-full w-full bg-black"
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageAnimationTwo;
