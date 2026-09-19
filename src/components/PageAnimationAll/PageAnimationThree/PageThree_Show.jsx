import React from "react";
import AnimaResusable from "../../../utils/AnimaResusable";

const PageThree_Show = () => {
  return (
    <>
      <AnimaResusable
        breadcrumbs="Page Animations / Three"
        title="Page Animation Three"
        badge="Page animation"
        description="A smooth animated navigation menu with expressive transitions."
        mainHead="Page Animation One"
        previewDescription="Smooth transitions. Better experiences."
        videoLink="YOUR_CLOUDFLARE_R2_VIDEO_URL"
        code={Three}
        githubUrl="https://github.com/rajul2911/"
        viewAnimationRoute="page-animation-three"
      />
    </>
  );
};

export default PageThree_Show;

const Three = [
  {
    id: "pagination-three",
    name: "Pagination Three",
    route: "page-animation-three",
    files: [
      {
        name: "PageAnimationThree.jsx",
        code: `import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useOutlet } from "react-router-dom";
import { text, curve, translate } from "./AnimationThree";

const routes = {
  "/page-animation/page-animation-three": "Home",
  "/page-animation/page-animation-three/about-three": "About",
  "/page-animation/page-animation-three/contact-three": "Contact",
};

const anim = (variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

const SVG = ({ width, height }) => {
  const initialPath = \`
    M0 300
    Q\${width / 2} 0 \${width} 300
    L\${width} \${height + 300}
    Q\${width / 2} \${height + 600} 0 \${height + 300}
    L0 0
  \`;

  const targetPath = \`
    M0 300
    Q\${width / 2} 0 \${width} 300
    L\${width} \${height}
    Q\${width / 2} \${height} 0 \${height}
    L0 0
  \`;

  return (
    <motion.svg
      {...anim(translate)}
      className="fixed left-0 top-0 z-[2] h-[calc(100vh+600px)] w-screen pointer-events-none"
      viewBox={\`0 0 \${width} \${height + 600}\`}
      preserveAspectRatio="none"
    >
      <motion.path {...anim(curve(initialPath, targetPath))} fill="black" />
    </motion.svg>
  );
};

const PageAnimationThree = () => {
  const location = useLocation();
  const outlet = useOutlet();

  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Background fallback */}
      <div
        className="fixed left-0 top-0 h-[calc(100vh+600px)] w-screen pointer-events-none"
        style={{
          backgroundColor: "black",
          opacity: dimensions.width === null ? 1 : 0,
          transition: "opacity 0s linear 0.1s",
        }}
      />

      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          {/* Animated Route Title */}
          <motion.p
            className="absolute left-1/2 top-[40%] z-[3] -translate-x-1/2 text-center text-[46px] font-bold text-white pointer-events-none"
            {...anim(text)}
          >
            {routes[location.pathname] || ""}
          </motion.p>

          {/* Transition Curve */}
          {dimensions.width !== null && (
            <SVG width={dimensions.width} height={dimensions.height} />
          )}

          {/* Header */}
          <header className="relative z-[1000] flex flex-col p-10">
            <span className="text-[24px] font-black uppercase">
              Page Animation Three
            </span>

            <nav className="mt-4 flex gap-4">
              <Link to="." className="text-[18px] font-semibold">
                Home
              </Link>
              <Link to="about-three" className="text-[18px] font-semibold">
                About
              </Link>
              <Link to="contact-three" className="text-[18px] font-semibold">
                Contact
              </Link>
            </nav>
          </header>

          {/* Page Content */}
          <main className="relative z-0 px-10">{outlet}</main>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default PageAnimationThree;`,
      },
      {
        name: "AnimationThree.js",
        code: `export const text = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    top: -100,
    transition: {
      duration: 1.3,
      delay: 0.95,
      ease: [0.76, 0, 0.24, 1],
    },
    transitionEnd: {
      top: "47.5%",
    },
  },
  exit: {
    opacity: 1,
    top: "40%",
    transition: {
      duration: 0.5,
      delay: 0.4,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export const curve = (initialPath, targetPath) => ({
  initial: {
    d: initialPath,
  },
  enter: {
    d: targetPath,
    transition: {
      duration: 0.75,
      delay: 0.35,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    d: initialPath,
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
});

export const translate = {
  initial: {
    top: "-300px",
  },
  enter: {
    top: "-100vh",
    transition: {
      duration: 0.75,
      delay: 0.35,
      ease: [0.76, 0, 0.24, 1],
    },
    transitionEnd: {
      top: "100vh",
    },
  },
  exit: {
    top: "-300px",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};`,
      },
    ],
  },
];
