import React from "react";
import { motion } from "motion/react";

const anim = {
  initial: {
    opacity: 0,
  },
  open: (delay) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.02 * delay[0] },
  }),
  closed: (delay) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.02 * delay[1] },
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

  const getBlocks = (indexOfColum) => {
    const blockSize = window.innerWidth * 0.05;

    const amountOfBlocks = Math.ceil(window.innerHeight / blockSize);

    const shuffledIndexes = shuffle(
      [...Array(amountOfBlocks)].map((_, i) => i),
    );

    return shuffledIndexes.map((randomIndex, index) => (
      <motion.div
        key={index}
        variants={anim}
        initial="initial"
        animate={menuIsActive ? "open" : "closed"}
        custom={[indexOfColum + randomIndex, 20 - indexOfColum + randomIndex]}
        className="h-[5vw] w-full bg-[#ff6a00]"
      />
    ));
  };

  return (
    <div className="pointer-events-none relative z-[1] flex h-screen overflow-hidden">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="flex h-full w-[5vw] flex-col">
          {getBlocks(index)}
        </div>
      ))}
    </div>
  );
};

export default Horizontal;
