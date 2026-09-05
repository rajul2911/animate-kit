"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";

import img1 from "../../../assests/Parallax Scroll Images/1.jpg";
import img2 from "../../../assests/Parallax Scroll Images/2.jpg";
import img3 from "../../../assests/Parallax Scroll Images/3.jpg";
import img4 from "../../../assests/Parallax Scroll Images/4.jpg";
import img5 from "../../../assests/Parallax Scroll Images/5.jpg";
import img6 from "../../../assests/Parallax Scroll Images/6.jpg";
import img7 from "../../../assests/Parallax Scroll Images/7.jpg";
import img8 from "../../../assests/Parallax Scroll Images/8.jpg";
import img9 from "../../../assests/Parallax Scroll Images/9.jpg";
import img10 from "../../../assests/Parallax Scroll Images/10.jpg";
import img11 from "../../../assests/Parallax Scroll Images/11.jpg";
import img12 from "../../../assests/Parallax Scroll Images/12.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const Column = ({ images, y, top }) => {
  return (
    <motion.div
      style={{
        y,
        top,
      }}
      // className="absolute flex w-1/4 flex-col gap-4 p-2"
      className="relative flex flex-col lg:gap-10 gap-3 lg:p-3 p-1 overflow-hidden w-1/4"
    >
      {images.map((src, index) => (
        // <div
        //   key={index}
        //   className="relative h-[55vh] w-full overflow-hidden rounded-[10px]"
        // >
          <img
            src={src}
            alt={`Parallax item ${index + 1}`}
            className="h-full w-full rounded-[10px] object-cover"
          />
        // </div>
      ))}
    </motion.div>
  );
};

const ScrollOne = () => {
  const container = useRef(null);

  const [height, setHeight] = useState(0);

  /*
   * Get viewport height
   */
  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  /*
   * Lenis smooth scrolling
   */
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
    });

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

  /*
   * Track scroll progress of the parallax section
   */
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  /*
   * Different speeds for each column
   */
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 0.8]
  );

  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 1.4]
  );

  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 0.5]
  );

  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 1.2]
  );

  return (
    <main className="">
      <div className="h-screen" />

      {/* PARALLAX SECTION */}
      <section
        ref={container}
        // className=" flex relative h-[150vh] w-full overflow-hidden bg-[rgb(45,45,45)]"
        className="flex box-border gap-2 p-2 bg-[rgb(45,45,45)] overflow-hidden h-[150vh]"
      >
        {/* Column 1 */}
        <Column
          images={[images[0], images[1], images[2]]}
          y={y1}
          top="-25%"
        />

        {/* Column 2 */}
        <Column
          images={[images[3], images[4], images[5]]}
          y={y2}
          top="-45%"
        />

        {/* Column 3 */}
        <Column
          images={[images[6], images[7], images[8]]}
          y={y3}
          top="-10%"
        />

        {/* Column 4 */}
        <Column
          images={[images[9], images[10], images[11]]}
          y={y4}
          top="-35%"
        />
      </section>

      <div className="h-screen" />
    </main>
  );
};

export default ScrollOne;
