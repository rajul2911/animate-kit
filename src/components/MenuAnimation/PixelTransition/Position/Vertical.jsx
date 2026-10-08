import React from "react";
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
      [...Array(amountOfBlocks)].map((_, i) => i),
    );

    return shuffledIndexes.map((randomIndex, index) => (
      <motion.div
        key={index}
        variants={anim}
        initial="initial"
        animate={menuIsActive ? "open" : "closed"}
        custom={[indexOfColumn + randomIndex, 10 - indexOfColumn + randomIndex]}
        className="h-[10vh] w-[10vh] shrink-0 bg-[#ff6a00]"
      />
    ));
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] flex h-screen w-screen flex-col overflow-hidden">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="flex h-[10vh] w-full shrink-0">
          {getBlocks(index)}
        </div>
      ))}
    </div>
  );
};

export default Vertical;
