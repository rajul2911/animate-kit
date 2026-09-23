import React, { useRef, useState } from "react";
import { motion } from "motion/react";

const MagnetCursor = ({ children }) => {
  const ref = useRef(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouse = (e) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;

    const { height, width, left, top } =
      ref.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({
      x: middleX * 0.1,
      y: middleY * 0.1,
    });
  };

  const reset = () => {
    setPosition({
      x: 0,
      y: 0,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={position}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 5,
        mass: 0.5,
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default MagnetCursor;