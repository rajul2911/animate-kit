import React from "react";
import AnimaResusable from "../../../utils/AnimaResusable";

const MenuFour_Show = () => {
  return (
    <div>
      <AnimaResusable
        breadcrumbs="Menu Animations / Pixel Transition"
        title="Pixel Transition"
        badge="Menu animation"
        description="A dynamic transition where pixels smoothly animate to reveal or transform between sections."
        // videoLink="https://videos.animate-kit.store/Menu/Menu_Two.mp4"
        code={Four}
        //   githubUrl="https://github.com/rajul2911/animate-kit/tree/main/src/components/MenuAnimation/MenuTwo"
        viewAnimationRoute="pixel-transition-live"
      />
    </div>
  );
};

export default MenuFour_Show;

const Four = [
  {
    id: "menu-four",
    name: "Pixel Transition",
    files: [
      {
        name: "Pixel.jsx",
        code: `import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Center from "./Position/Center";
import Horizontal from "./Position/Horizontal";
import Vertical from "./Position/Vertical";

const Pixel = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <div>
      <Header
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
      />

      <Menu menuIsActive={menuIsActive} />

      {/* Animation from the middle */}
      {/* <Center menuIsActive={menuIsActive} /> */}

      {/* Transition from left to right */}
      {/* <Horizontal menuIsActive={menuIsActive} /> */}

      {/* Transition from top to bottom */}
      <Vertical menuIsActive={menuIsActive} />
    </div>
  );
};

export default Pixel;
`,
      },

      {
        name: "Header.jsx",
        code: `import React from "react";

const Header = ({ menuIsActive, setMenuIsActive }) => {
  return (
    <div className="fixed top-0 z-[4] box-border flex w-full justify-end p-[40px]">
      <div
        onClick={() => setMenuIsActive(!menuIsActive)}
        className="relative flex cursor-pointer flex-col"
      >
        <span
          className={\`relative block h-[2px] w-[30px] bg-black transition-transform duration-300 \${menuIsActive ? "top-0 rotate-[45deg]" : "top-[5px]"}\`}
        />

        <span
          className={\`relative block h-[2px] w-[30px] bg-black transition-transform duration-300 \${menuIsActive ? "top-0 rotate-[-45deg]" : "top-[-5px]"}\`}
        />
      </div>
    </div>
  );
};

export default Header;
`,
      },

      {
        name: "Menu.jsx",
        code: `import React from "react";
import { motion } from "motion/react";

const anim = {
  initial: {
    opacity: 0,
  },

  open: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },
};

const Menu = ({ menuIsActive }) => {
  return (
    <motion.div
      className="fixed z-[3] flex h-[90vh] w-full flex-col items-center justify-center"
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "closed"}
    >
      <p className="m-[5px] text-[5vw]">Home</p>
      <p className="m-[5px] text-[5vw]">About</p>
      <p className="m-[5px] text-[5vw]">Contact</p>
    </motion.div>
  );
};

export default Menu;
`,
      },

      {
        name: "Center.jsx",
        code: `import React from "react";
import { motion } from "motion/react";

const anim = {
  initial: {
    opacity: 0,
  },

  open: (i) => ({
    opacity: 1,
    transition: {
      duration: 0,
      delay: 0.03 * i,
    },
  }),

  closed: (i) => ({
    opacity: 0,
    transition: {
      duration: 0,
      delay: 0.03 * i,
    },
  }),
};

const Center = ({ menuIsActive }) => {
  const shuffle = (array) => {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };

  const getBlocks = () => {
    const blockSize = window.innerWidth * 0.05;
    const amountOfBlocks = Math.ceil(window.innerHeight / blockSize);

    const shuffledIndexes = shuffle(
      [...Array(amountOfBlocks)].map((_, i) => i)
    );

    return shuffledIndexes.map((randomIndex, index) => (
      <motion.div
        key={index}
        variants={anim}
        initial="initial"
        animate={menuIsActive ? "open" : "closed"}
        custom={randomIndex}
        className="h-[5vw] w-full bg-[#ff6a00]"
      />
    ));
  };

  return (
    <div className="pointer-events-none relative z-[1] flex h-screen overflow-hidden">
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="flex h-full w-[5vw] flex-col"
        >
          {getBlocks()}
        </div>
      ))}
    </div>
  );
};

export default Center;
`,
      },

      {
        name: "Horizontal.jsx",
        code: `import React from "react";
import { motion } from "motion/react";

const anim = {
  initial: {
    opacity: 0,
  },

  open: (delay) => ({
    opacity: 1,
    transition: {
      duration: 0,
      delay: 0.02 * delay[0],
    },
  }),

  closed: (delay) => ({
    opacity: 0,
    transition: {
      duration: 0,
      delay: 0.02 * delay[1],
    },
  }),
};

const Horizontal = ({ menuIsActive }) => {
  const shuffle = (array) => {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };

  const getBlocks = (indexOfColumn) => {
    const blockSize = window.innerWidth * 0.05;
    const amountOfBlocks = Math.ceil(window.innerHeight / blockSize);

    const shuffledIndexes = shuffle(
      [...Array(amountOfBlocks)].map((_, i) => i)
    );

    return shuffledIndexes.map((randomIndex, index) => (
      <motion.div
        key={index}
        variants={anim}
        initial="initial"
        animate={menuIsActive ? "open" : "closed"}
        custom={[
          indexOfColumn + randomIndex,
          20 - indexOfColumn + randomIndex,
        ]}
        className="h-[5vw] w-full bg-[#ff6a00]"
      />
    ));
  };

  return (
    <div className="pointer-events-none relative z-[1] flex h-screen overflow-hidden">
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="flex h-full w-[5vw] flex-col"
        >
          {getBlocks(index)}
        </div>
      ))}
    </div>
  );
};

export default Horizontal;
`,
      },

      {
        name: "Vertical.jsx",
        code: `import React from "react";
import { motion } from "motion/react";

const anim = {
  initial: {
    opacity: 0,
  },

  open: (delay) => ({
    opacity: 1,
    transition: {
      duration: 0,
      delay: 0.02 * delay[1],
    },
  }),

  closed: (delay) => ({
    opacity: 0,
    transition: {
      duration: 0,
      delay: 0.02 * delay[0],
    },
  }),
};

const Vertical = ({ menuIsActive }) => {
  const shuffle = (array) => {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };

  const getBlocks = (indexOfColumn) => {
    const blockSize = window.innerHeight * 0.1;
    const amountOfBlocks = Math.ceil(window.innerWidth / blockSize);

    const shuffledIndexes = shuffle(
      [...Array(amountOfBlocks)].map((_, i) => i)
    );

    return shuffledIndexes.map((randomIndex, index) => (
      <motion.div
        key={index}
        variants={anim}
        initial="initial"
        animate={menuIsActive ? "open" : "closed"}
        custom={[
          indexOfColumn + randomIndex,
          10 - indexOfColumn + randomIndex,
        ]}
        className="h-[10vh] w-[10vh] shrink-0 bg-[#ff6a00]"
      />
    ));
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] flex h-screen w-screen flex-col overflow-hidden">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="flex h-[10vh] w-full shrink-0"
        >
          {getBlocks(index)}
        </div>
      ))}
    </div>
  );
};

export default Vertical;
`,
      },
    ],
  },
];
