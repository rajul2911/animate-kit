import React, { useState } from "react";
import { motion } from "motion/react";
import useMousePosition from "./useMousePosition";

const CursorOne = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[hsl(0,0%,6%)]">
      {/* RED MASK LAYER */}
      <motion.div
        className="
          absolute inset-0
          z-10
          flex h-screen w-full
          items-center justify-center
          bg-[#ec4e39]
          text-[#121212]
        "
        style={{
          maskImage:
            "radial-gradient(circle, black 0%, black 50%, transparent 51%)",

          WebkitMaskImage:
            "radial-gradient(circle, black 0%, black 50%, transparent 51%)",

          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
        animate={{
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

          maskSize: `${size}px ${size}px`,
          WebkitMaskSize: `${size}px ${size}px`,
        }}
        // transition={{
        //   type: "tween",
        //   ease: "backOut",
        //   duration: 0.5,
        // }}
        transition={{
          maskPosition: {
            type: "tween",
            ease: "linear",
            duration: 1,
          },

          WebkitMaskPosition: {
            type: "tween",
            ease: "linear",
            duration: 0.1,
          },

          maskSize: {
            type: "tween",
            ease: "backOut",
            duration: 5,
          },

          WebkitMaskSize: {
            type: "tween",
            ease: "backOut",
            duration: 0.5,
          },
        }}
      >
        <p
          className="
            w-[1000px]
            p-10
            text-[64px]
            font-bold
            leading-[64px]
            cursor-default
            select-none
          "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          A visual designer - with skills that haven't been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      {/* NORMAL LAYER */}
      <div
        className="
          absolute inset-0
          flex h-screen w-full
          items-center justify-center
          text-[64px]
          font-bold
          leading-[64px]
          text-[#afa18f]
        "
      >
        <p className="w-[1000px] p-10">
          I'm a <span className="text-[#ec4e39]">selectively skilled</span>{" "}
          product designer with strong focus on producing high quality &
          impactful digital experience.
        </p>
      </div>
    </main>
  );
};

export default CursorOne;
