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

        <motion.div
          className="fixed inset-0 z-10 h-screen w-full bg-white"
          {...anim(slide)}
        />


        <motion.div
          className="relative min-h-screen bg-white
          "
          {...anim(perspective)}
        >

          <motion.div className="min-h-screen" {...anim(opacity)}>

            <header className="flex flex-col p-10">
              <div className="flex gap-4">

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


            <main className="px-10">{outlet}</main>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageAnimationOne;
