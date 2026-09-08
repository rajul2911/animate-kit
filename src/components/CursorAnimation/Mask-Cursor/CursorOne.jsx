import React, { useState } from "react";
import { motion } from "motion/react";
import useMousePosition from "./useMousePosition";

const maskImage =
  "radial-gradient(circle, black 0%, black 50%, transparent 51%)";

const CursorOne = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="
          absolute inset-0
          flex h-full w-full
          items-center justify-center
          bg-[#ec4e39]
          text-[#121212]
        "
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,

          WebkitMaskSize: `${size}px ${size}px`,
          maskSize: `${size}px ${size}px`,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.5,
        }}
      >
        <p
          className="
            w-[1000px]
            p-10
            text-[64px]
            font-bold
            leading-[66px]
            cursor-default
          "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          A visual designer - with skills that haven't been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      {/* BODY */}
      <div
        className="
          flex h-screen w-full
          items-center justify-center
          text-[64px]
          font-bold
          leading-[66px]
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