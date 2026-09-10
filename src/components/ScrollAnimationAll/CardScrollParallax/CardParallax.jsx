import React, { useRef } from "react";
import { MdArrowForward } from "react-icons/md";
import { motion, useScroll, useTransform } from "motion/react";

const CardParallax = ({ item, key, i, progress, range, targetScale }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const imagescale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          backgroundColor: item?.color,
          top: `calc(-10% +  ${i * 25}px )`,
        }}
        className="relative flex flex-col  h-[500px] w-[1000px] rounded-[25px] p-[50px] origin-top"
      >
        <h2 className="text-center m-0 text-[28px]">{item?.title}</h2>

        <div className="flex flex-1 min-h-0 mt-[50px] gap-[50px]">
          <div className="w-[40%] relative top-[10%]">
            <p className="text-[16px] first-letter:text-[28px]">
              {item?.description}
            </p>

            <span className="flex items-center gap-[5px]">
              <a
                href={item?.link}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] underline cursor-pointer"
              >
                See more
              </a>

              <MdArrowForward size={22} />
            </span>
          </div>

          <div className="relative w-[60%] h-full rounded-[25px] overflow-hidden">
            <motion.div style={{ imagescale }} className="w-full h-full">
              <img
                src={item?.src}
                alt={item?.title || "image"}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardParallax;
