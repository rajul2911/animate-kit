import React, { useEffect, useRef } from "react";
import Picture1 from "../../../assests/Zoom_Parallax_Scroll/1.jpeg";
import Picture2 from "../../../assests/Zoom_Parallax_Scroll/2.jpeg";
import Picture3 from "../../../assests/Zoom_Parallax_Scroll/3.jpg";
import Picture4 from "../../../assests/Zoom_Parallax_Scroll/4.jpg";
import Picture5 from "../../../assests/Zoom_Parallax_Scroll/5.jpg";
import Picture6 from "../../../assests/Zoom_Parallax_Scroll/6.jpg";
import Picture7 from "../../../assests/Zoom_Parallax_Scroll/7.jpeg";
import { useScroll, useTransform, motion } from "motion/react";
import Lenis from "lenis";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

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
      <div className="h-[50vh] bg-[#181818] p-10">
          <Link
            to="/scroll-animation"
            className="group inline-flex items-center gap-1.5 rounded-lg border border-[#d7d7d7] bg-white px-3 py-2 text-xs font-semibold text-[#333] no-underline shadow-sm transition-all duration-200 hover:border-[#111] hover:bg-[#111] hover:text-white hover:shadow-md sm:gap-2 sm:px-3.5 sm:py-2.5 sm:text-sm"
          >
            <MdOutlineArrowBackIos className="text-[11px] transition-transform duration-200 group-hover:-translate-x-0.5 sm:text-xs" />

            <span>Back</span>
          </Link>
      </div>

      <div ref={container} className="relative h-[300vh]">
        <div className="sticky top-0 h-[100vh] overflow-hidden bg-[#181818]">
          {pictures.map(({ src, scale, className }, index) => (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div className={className}>
                <img
                  src={src}
                  alt={`Picture ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-[100vh] bg-[#181818]" />
    </>
  );
};

export default ZoomParallax;
