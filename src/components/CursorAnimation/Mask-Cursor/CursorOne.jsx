import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import useMousePosition from "./useMousePosition";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const maskImage =
  "radial-gradient(circle, black 0%, black 50%, transparent 51%)";

const CursorOne = () => {
  const [isHovered, setIsHovered] = useState(false);
  // THis also
  // const [isInside, setIsInside] = useState(true);
  const { x, y } = useMousePosition();

  // This Code if you want to remove svg from browser when cursor goes out of viewport
  //   useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setIsInside(e.clientX >= 0 && e.clientX <= window.innerWidth && e.clientY >= 0 && e.clientY <= window.innerHeight);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsInside(false);
  //   };

  //   const handleMouseEnter = () => {
  //     setIsInside(true);
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   document.addEventListener("mouseleave", handleMouseLeave);
  //   document.addEventListener("mouseenter", handleMouseEnter);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //     document.removeEventListener("mouseleave", handleMouseLeave);
  //     document.removeEventListener("mouseenter", handleMouseEnter);
  //   };
  // }, []);

  // Uset This also for cursor out effect
  // const size = !isInside ? 0 : isHovered ? 400 : 40;
  // else
  const size = isHovered ? 400 : 40;

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <div className="absolute left-5 top-5 z-50 sm:left-6 sm:top-6">
        <Link
          to="/cursor-effects"
          className="group inline-flex items-center gap-1.5 rounded-lg border border-[#d7d7d7] bg-white px-3 py-2 text-xs font-semibold text-[#333] no-underline shadow-sm transition-all duration-200 hover:border-[#111] hover:bg-[#111] hover:text-white hover:shadow-md sm:gap-2 sm:px-3.5 sm:py-2.5 sm:text-sm"
        >
          <MdOutlineArrowBackIos className="text-[11px] transition-transform duration-200 group-hover:-translate-x-0.5 sm:text-xs" />
          <span>Back</span>
        </Link>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-[#ec4e39] text-[#121212]"
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
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          className="pointer-events-auto w-[1000px] cursor-default select-none p-10 text-[64px] font-bold leading-[66px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          A visual designer - with skills that haven't been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className="flex h-screen w-full items-center justify-center text-[64px] font-bold leading-[66px] text-[#afa18f]">
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
