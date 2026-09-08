export const cursoreffect = [
  {
    id: "cursor-effect-one",
    name: "Cursor Effect One",
    route: "cursor-one",
    files: [
      {
        name: "CursorOne.jsx",
        code: `import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";

const maskImage =
  "radial-gradient(circle, black 0%, black 50%, transparent 51%)";

const CursorOne = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;
  const isReady = x !== null && y !== null;

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#121212]">
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
          opacity: isReady ? 1 : 0,
        }}
        animate={{
          WebkitMaskPosition: isReady ? \`\${x - size / 2}px \${y - size / 2}px\` : "0px 0px",
          maskPosition: isReady ? \`\${x - size / 2}px \${y - size / 2}px\` : "0px 0px",
          WebkitMaskSize: \`\${size}px \${size}px\`,
          maskSize: \`\${size}px \${size}px\`,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.4,
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
          A visual designer - with skills that haven&apos;t been replaced by A.I
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
          I&apos;m a <span className="text-[#ec4e39]">selectively skilled</span>{" "}
          product designer with strong focus on producing high quality &amp;
          impactful digital experience.
        </p>
      </div>
    </main>
  );
};

export default CursorOne;`,
      },
      {
        name: "useMousePosition.js",
        code: `import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;`,
      },
    ],
  },
];
