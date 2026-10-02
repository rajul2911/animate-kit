import React from "react";
import { motion } from "motion/react";

export const links = [
  {
    title: "Projects",
    href: "/",
  },
  {
    title: "Agency",
    href: "/",
  },
  {
    title: "Expertise",
    href: "/",
  },
  {
    title: "Careers",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
];

export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const NavMenu = () => {
  return (
    <div className="flex flex-col justify-between h-full pt-[100px] pr-[40px] pb-[50px] pl-[40px] box-border">
      <div className="flex flex-col gap-[10px]">
        {links.map((item, index) => (
          <div
            key={`b_${index}`}
            style={{
              perspective: "120px",
              perspectiveOrigin: "bottom",
            }}
          >
            <motion.div
              custom={index}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <a
                href={item.href}
                className="text-black no-underline text-[46px]"
              >
                {item.title}
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
