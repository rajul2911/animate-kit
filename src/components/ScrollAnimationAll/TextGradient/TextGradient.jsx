import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout";

const TextGradient = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <div className="flex flex-col bg-[rgb(24,24,24)]">
      <div className="h-screen" />
      <p
        ref={container}
        className='flex max-w-[1280px] flex-wrap p-[40px]  text-[50px] font-black italic leading-none text-white'
      >
        <motion.p
          style={{ opacity: scrollYProgress }}
          ref={container}
          className='max-w-full p-[40px] text-[50px] font-black italic leading-none text-white'
        >
          {paragraph}
        </motion.p>

        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;

          return (
            <Word
              key={`${word}-${index}`}
              range={[start, end]}
              progress={scrollYProgress}
            >
              {word}
            </Word>
          );
        })}
      </p>

      {/* Bottom spacing */}
      <div className="h-screen" />
    </div>
  );
};

export default TextGradient;

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-[12px] mt-[12px]">
      <span className="absolute opacity-20">{children}</span>

      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
