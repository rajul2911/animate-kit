import React from 'react'
import AnimaResusable from '../../../utils/AnimaResusable'

const ScrollThree_Show = () => {
  return (
    <>

      <AnimaResusable
      breadcrumbs="Page Animations / One"
      title="Page Animation One"
      badge="Page animation"
      description="A smooth animated navigation menu with expressive transitions."
      mainHead="Page Animation Onejjsdjkdfsjkasfdkj"
      previewDescription="Smooth transitions. Better experiences."
      videoLink="YOUR_CLOUDFLARE_R2_VIDEO_URL"
      code={Three}
      githubUrl="https://github.com/rajul2911/"
      viewAnimationRoute="zoom-parallax-live"
    />



    </>
  )
}

export default ScrollThree_Show


const Three=[
    {
    id: "scroll-three",
    name: "Zoom Parallax Animation",
    route: "scroll-animation-three",
    files: [
      {
        name: "ZoomParallax.jsx",
        code: `import React, { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Picture1 from "../images/1.jpg";
import Picture2 from "../images/2.jpg";
import Picture3 from "../images/3.jpg";
import Picture4 from "../images/4.jpg";
import Picture5 from "../images/5.jpg";
import Picture6 from "../images/6.jpg";
import Picture7 from "../images/7.jpg";

const ZoomParallax = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
      className: "w-[25vw] h-[25vh] relative",
    },
    {
      src: Picture2,
      scale: scale5,
      className: "w-[35vw] h-[30vh] relative top-[-30vh] left-[5vw]",
    },
    {
      src: Picture3,
      scale: scale6,
      className: "w-[20vw] h-[45vh] relative top-[-10vh] left-[-25vw]",
    },
    {
      src: Picture4,
      scale: scale5,
      className: "w-[25vw] h-[25vh] relative left-[27.5vw]",
    },
    {
      src: Picture5,
      scale: scale6,
      className: "w-[20vw] h-[25vh] relative top-[27.5vh] left-[5vw]",
    },
    {
      src: Picture6,
      scale: scale8,
      className: "w-[30vw] h-[25vh] relative top-[27.5vh] left-[-22.5vw]",
    },
    {
      src: Picture7,
      scale: scale9,
      className: "w-[15vw] h-[15vh] relative top-[22.5vh] left-[25vw]",
    },
  ];

  useEffect(() => {
    const lenis = new Lenis();

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="h-[50vh] bg-[#181818]" />

      <div ref={container} className="relative h-[300vh]">
        <div className="sticky top-0 h-[100vh] overflow-hidden bg-[#181818]">
          {pictures.map(({ src, scale, className }, index) => (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div className={className}>
                <img src={src} alt={\`Picture \${index + 1}\`} className="h-full w-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-[100vh] bg-[#181818]" />
    </>
  );
};

export default ZoomParallax;`,
      },
    ],
  },
]