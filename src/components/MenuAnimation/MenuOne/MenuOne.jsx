import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

const menuSlide = {
  initial: {
    x: "calc(100% + 100px)",
  },

  enter: {
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },

  exit: {
    x: "calc(100% + 100px)",
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
    x: -20,
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
    x: 80,
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

const MenuOne = () => {
  const [Active, setActive] = useState(false);

  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

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
    <div className="relative h-screen overflow-x-clip">
      <motion.div
        variants={buttonSlide}
        animate={Active ? "open" : "closed"}
        className="absolute top-10 right-5 z-50 flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-full bg-[#455ce9] text-white"
        onClick={() => setActive(!Active)}
      >
        <RxHamburgerMenu className="text-[30px]" />
      </motion.div>

      <AnimatePresence mode="wait">
        {Active && (
          <>
            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="absolute top-0 right-0 z-40 flex h-screen w-[500px] flex-col bg-[#292929] px-20 py-50"
            >
              <span className="py-2 uppercase text-[#999999]">Navigation</span>

              <svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-[#292929] stroke-none">
                <motion.path
                  variants={pathAnimation}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                ></motion.path>
              </svg>

              <span className="border-b text-[#999999]" />

              <motion.div
                variants={navContainer}
                initial="initial"
                animate="enter"
                exit="exit"
                className="mt-[60px] flex flex-col gap-[18px] pb-40 text-[56px] text-white"
              >
                <motion.span variants={navItem}>Home</motion.span>
                <motion.span variants={navItem}>Work</motion.span>
                <motion.span variants={navItem}>About</motion.span>
                <motion.span variants={navItem}>Contact</motion.span>
              </motion.div>

              {/* Social Links */}
              <div className="flex gap-8 font-semibold text-white">
                <span>Awwwards</span>
                <span>Instagram</span>
                <span>Dribble</span>
                <span>Linkdin</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuOne;
