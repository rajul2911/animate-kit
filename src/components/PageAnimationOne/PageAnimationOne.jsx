import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, useLocation, useOutlet } from "react-router-dom";

import { slide, opacity, perspective } from "./AnimationOne";
import { MdOutlineArrowBackIos } from "react-icons/md";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const PageAnimationOne = () => {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <AnimatePresence mode="wait">
      <div
        key={location.pathname}
        className="relative min-h-screen overflow-hidden bg-black"
      >
        {/* SLIDE */}

        <motion.div
          className="fixed inset-0 z-10 h-screen w-full bg-white"
          {...anim(slide)}
        />

        {/* PAGE */}

        <motion.div
          className="relative min-h-screen bg-white
          "
          {...anim(perspective)}
        >
          {/* OPACITY */}

          <motion.div className="min-h-screen" {...anim(opacity)}>
            {/* HEADER */}

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
                  Page Animation One
                </span>
              </div>

              <nav className="mt-4 flex gap-4">
                <Link to="." className="text-[18px] font-semibold">
                  Home
                </Link>

                <Link to="about-one" className="text-[18px] font-semibold">
                  About
                </Link>

                <Link to="contact-one" className="text-[18px] font-semibold">
                  Contact
                </Link>
              </nav>
            </header>

            {/* CURRENT ROUTE CONTENT */}

            <main className="px-10">{outlet}</main>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageAnimationOne;
