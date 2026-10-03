import React from "react";
import AnimaResusable from "../../../utils/AnimaResusable";

const MenuTwo_Show = () => {
  return (
    <div>
      <AnimaResusable
        breadcrumbs="Menu Animations / SideBar Menu"
        title="SideBar Menu"
        badge="Menu animation"
        description="A smooth animated sidebar navigation that expands and transitions between menu items"
        videoLink="https://videos.animate-kit.store/Menu/Menu_Two.mp4"
          code={Two}
          githubUrl="https://github.com/rajul2911/animate-kit/tree/main/src/components/MenuAnimation/MenuTwo"
        viewAnimationRoute="sidebar-menu-live"
      />
    </div>
  );
};

export default MenuTwo_Show;

const Two = [
  {
    id: "menu-two",
    name: "Menu Two",
    files: [
      {
        name: "SideBarMenu.jsx",
        code: `import React, { useState } from 'react'
import Button from './Button'
import { AnimatePresence, motion } from 'motion/react'
import NavMenu from './NavMenu'

const SideBarMenu = () => {
  const variants = {
    open: {
      width: 480,
      height: 650,
      top: "-25px",
      right: "-25px",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    close: {
      height: 40,
      width: 100,
      top: "0px",
      right: "0px",
      transition: {
        delay: 0.35,
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  const [isActive, setIsActive] = useState(false)

  return (
    <div className='fixed right-[50px] top-[50px]'>
      <motion.div
        variants={variants}
        animate={isActive ? "open" : "close"}
        initial="close"
        className='relative w-[480px] h-[650px] bg-[#c9fd74] rounded-[25px]'
      >
        <AnimatePresence>
          {isActive && <NavMenu />}
        </AnimatePresence>
      </motion.div>

      <Button
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  )
}

export default SideBarMenu`,
      },
      {
        name: "NavMenu.jsx",
        code: `import React from "react";
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
    translateX: 20,
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
      opacity: {
        duration: 0.35,
      },
    },
  }),

  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "linear",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const NavMenu = () => {
  return (
    <div className="flex flex-col justify-between h-full pt-[100px] pr-[40px] pb-[50px] pl-[40px] box-border">
      <div className="flex flex-col gap-[10px]">
        {links.map((item, index) => (
          <div key={\`b_\${index}\`}>
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

export default NavMenu;`,
      },
      {
        name: "Button.jsx",
        code: `import React from "react";
import { motion } from "motion/react";

const Button = ({ isActive, setIsActive }) => {
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="absolute top-0 right-0 h-[40px] w-[100px] cursor-pointer overflow-hidden rounded-[25px]"
    >
      <motion.div
        animate={{
          top: isActive ? "-100%" : "0%",
        }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="relative h-full w-full"
      >
        <div className="group h-full w-full bg-[#c9fd74] uppercase">
          <Perspective label="Menu" />
        </div>

        <div className="group absolute top-full h-full w-full bg-black text-white uppercase">
          <Perspective label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

export default Button;

const Perspective = ({ label }) => {
  return (
    <div className="group relative flex h-full w-full items-center justify-center [transform-style:preserve-3d] transition-transform duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:[transform:rotateX(90deg)]">
      <p className="m-0 transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-hover:opacity-0">
        {label}
      </p>

      <p className="absolute m-0 origin-bottom [transform:rotateX(-90deg)_translateY(9px)] opacity-0 transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:opacity-100">
        {label}
      </p>
    </div>
  );
};`,
      },
    ],
  },
];
