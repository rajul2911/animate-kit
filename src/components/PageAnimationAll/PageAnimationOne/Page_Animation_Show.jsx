import React from "react";
import AnimaResusable from "../../../utils/AnimaResusable";

const Page_Animation_Show = () => {
  return (
    <>
      <AnimaResusable
        breadcrumbs="Page Animations / One"
        title="Page Animation One"
        badge="Page animation"
        description="Smooth page transitions for a fluid and modern navigation experience."
        videoLink="YOUR_CLOUDFLARE_R2_VIDEO_URL"
        code={One}
        githubUrl="https://github.com/rajul2911/animate-kit/tree/main/src/components/PageAnimationAll/PageAnimationOne"
        viewAnimationRoute="page-one-live"
      />
    </>
  );
};

export default Page_Animation_Show;

const One = [
  {
    id: "pagination-one",
    name: "Pagination One",
    route: "page-animation-one",
    files: [
      {
        name: "PageAnimationOne.jsx",
        code: `import React from "react";
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

export default PageAnimationOne;`,
      },
      {
        name: "AnimationOne.js",
        code: `export const perspective = {
  initial: {
    scale: 1,
    y: 0,
  },

  enter: {
    scale: 1,
    y: 0,
  },

  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,

    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide = {
  initial: {
    y: "100vh",
  },

  enter: {
    y: "100vh",
  },

  exit: {
    y: 0,

    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },

  enter: {
    opacity: 1,

    transition: {
      duration: 0.5,
    },
  },

  exit: {
    opacity: 1,
  },
};`,
      },
    ],
  },
];
