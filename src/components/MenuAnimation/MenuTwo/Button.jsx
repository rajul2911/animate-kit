
import React from "react";
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
};
