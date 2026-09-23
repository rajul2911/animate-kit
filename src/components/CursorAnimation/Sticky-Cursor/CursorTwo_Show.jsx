import React from "react";
import AnimaResusable from "../../../utils/AnimaResusable";

const CursorTwo_Show = () => {
  return (
    <div>
      <AnimaResusable
        breadcrumbs="Cursor Animations / Sticky Cursor"
        title="Sticky Cursor"
        badge="Cursor Effect"
        description="A smooth magnetic cursor effect that sticks to interactive elements for a playful, responsive experience."
        videoLink="YOUR_CLOUDFLARE_R2_VIDEO_URL"
        code={Two}
        githubUrl="https://github.com/rajul2911/animate-kit/tree/main/src/components/CursorAnimation/Sticky-Cursor"
        viewAnimationRoute="sticky-cursor-live"
      />
    </div>
  );
};

export default CursorTwo_Show;

const Two = [
  {
    id: "sticky-cursor",
    name: "Cursor Effect Two",
    files: [
      {
        name: "StickyCursor.jsx",
        code: `const Header = forwardRef((props, ref) => {
  return (
    <div className="fixed z-[1] flex w-full justify-end box-border p-[10px] cursor-pointer mix-blend-difference">
      <MagnetCursor>
        <div className="relative flex flex-col gap-2 p-[30px] pointer-events-none before:block before:content-[''] before:w-[30px] before:h-[2px] before:mix-blend-difference before:bg-red-700 after:block after:content-[''] after:w-[30px] after:h-[2px] after:mix-blend-difference after:bg-red-700">
          <div
            ref={ref}
            className="absolute top-0 left-0 h-full w-full pointer-events-auto hover:scale-[3]"
          />
        </div>
      </MagnetCursor>
   import React, { forwardRef, useRef } from "react";
import CursorMove from "./CursorMove";
import MagnetCursor from "./MagnetCursor";

const StickyCursor = () => {
  const stickyelement = useRef(null);

  return (
    <>
      <div>
        <Header ref={stickyelement} />
        <CursorMove stickyElement={stickyelement} />
      </div>
    </>
  );
};

export default StickyCursor;

const Header = forwardRef((props, ref) => {
  return (
    <div
      className="
        fixed
        z-[1]
        flex
        w-full
        justify-end
        box-border
        p-[10px]
        cursor-pointer
        mix-blend-difference
      "
    >
      <MagnetCursor>
        <div
          className="
            relative
            flex
            flex-col
            gap-2
            p-[30px]
            pointer-events-none
            before:block
            before:content-['']
            before:w-[30px]
            before:h-[2px]
            before:mix-blend-difference
            before:bg-red-700
            after:block
            after:content-['']
            after:w-[30px]
            after:h-[2px]
            after:mix-blend-difference
            after:bg-red-700
          "
        >
          <div
            ref={ref}
            className="
              absolute
              top-0
              left-0
              h-full
              w-full
              pointer-events-auto
              hover:scale-[3]
            "
          />
        </div>
      </MagnetCursor>
    </div>
  );
}); </div>
  );
});`,
      },
      {
        name: "CursorMove.jsx",
        code: `import {
  useMotionValue,
  useSpring,
  transform,
  animate,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const CursorMove = ({ stickyElement }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef(null);

  const cursorSize = isHovered ? 60 : 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const smoothOptions = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const rotate = (distance) => {
    const angle = Math.atan2(distance.y, distance.x);

    animate(
      cursor.current,
      {
        rotate: \`\${angle}rad\`,
      },
      {
        duration: 0,
      }
    );
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    if (!stickyElement.current) return;

    const { left, top, height, width } =
      stickyElement.current.getBoundingClientRect();

    const center = {
      x: left + width / 2,
      y: top + height / 2,
    };

    if (isHovered) {
      const distance = {
        x: clientX - center.x,
        y: clientY - center.y,
      };

      rotate(distance);

      const absDistance = Math.max(
        Math.abs(distance.x),
        Math.abs(distance.y)
      );

      const newScaleX = transform(
        absDistance,
        [0, height / 2],
        [1, 1.3]
      );

      const newScaleY = transform(
        absDistance,
        [0, width / 2],
        [1, 0.8]
      );

      scale.x.set(newScaleX);
      scale.y.set(newScaleY);

      mouse.x.set(
        center.x - cursorSize / 2 + distance.x * 0.1
      );

      mouse.y.set(
        center.y - cursorSize / 2 + distance.y * 0.1
      );
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = () => {
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);

    animate(
      cursor.current,
      {
        scaleX: 1,
        scaleY: 1,
      },
      {
        duration: 0.1,
        type: "spring",
      }
    );
  };

  useEffect(() => {
    if (!stickyElement.current) return;

    const element = stickyElement.current;

    element.addEventListener("mouseenter", manageMouseOver);
    element.addEventListener("mouseleave", manageMouseLeave);

    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      element.removeEventListener("mouseenter", manageMouseOver);
      element.removeEventListener("mouseleave", manageMouseLeave);

      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered]);

  const template = ({ rotate, scaleX, scaleY }) => {
    return \`rotate(\${rotate}) scaleX(\${scaleX}) scaleY(\${scaleY})\`;
  };

  return (
    <motion.div
      ref={cursor}
      transformTemplate={template}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
      className="fixed rounded-full pointer-events-none bg-black"
    />
  );
};

export default CursorMove;`,
      },
      {
        name: "MagnetCursor.jsx",
        code: `import React, { useRef, useState } from "react";
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

export default MagnetCursor;`,
      },
    ],
  },
];
