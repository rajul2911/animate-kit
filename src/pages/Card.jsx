import React from "react";
import { motion } from "motion/react";
import { GoStack } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const details = [
  {
    id: 1,
    Head: "Page Animations",
    Des: "Beautiful page transitions and route animations.",
    icon: <GoStack />,
    iconColor: "text-[#404dfb]",
    bgcolor: "bg-[#e9efff]",
    to: "/page-animation",
  },
  {
    id: 2,
    Head: "Scroll Animations",
    Des: "Elements that come to life as you scroll.",
    icon: <GoStack />,
    iconColor: "text-[#19c995]",
    bgcolor: "bg-[#e4fbf3]",
    to: "/scroll-animation",
  },
  {
    id: 3,
    Head: "Text Animations",
    Des: "Creative text reveals and typography effects.",
    icon: <GoStack />,
    iconColor: "text-[#e7439b]",
    bgcolor: "bg-[#fdeaf5]",
    to: "/text-animation",
  },
  {
    id: 4,
    Head: "Cursor Effects",
    Des: "Interactive and custom cursor animations.",
    icon: <GoStack />,
    iconColor: "text-[#19aee8]",
    bgcolor: "bg-[#e7f7fd]",
    to: "/cursor-effects",
  },
  {
    id: 5,
    Head: "UI Interactions",
    Des: "Buttons, cards, menus and more.",
    icon: <GoStack />,
    iconColor: "text-[#8b42ed]",
    bgcolor: "bg-[#f1e9ff]",
    to: "/ui-interactions",
  },
  {
    id: 6,
    Head: "Media Animations",
    Des: "Image, video and gallery effects.",
    icon: <GoStack />,
    iconColor: "text-[#f59b20]",
    bgcolor: "bg-[#fff4df]",
    to: "/media-animation",
  },
  {
    id: 7,
    Head: "3D & Parallax",
    Des: "Depth, perspective and immersive motion.",
    icon: <GoStack />,
    iconColor: "text-[#18a8c4]",
    bgcolor: "bg-[#e5f9fc]",
    to: "/3d-parallax",
  },
  {
    id: 8,
    Head: "Creative Experiments",
    Des: "Fun and unique motion ideas.",
    icon: <GoStack />,
    iconColor: "text-[#ed4e9d]",
    bgcolor: "bg-[#fdeaf5]",
    to: "/creative-experiments",
  },
];

const Card = () => {
  return (
    <div
      className="
        w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5
        "
      >
        {details.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            whileHover={{
              y: -6,
              boxShadow: "0 18px 40px rgba(30, 41, 59, 0.10)",
            }}
            className="
              relative flex flex-col min-h-[220px] rounded-2xl border border-neutral-200/80 bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(30,41,59,0.06)] transition-shadow duration-300 overflow-hidden"
          >
            <div
              className=" absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-purple-100/60 to-blue-100/30 blur-[1px]"
            />

            <div
              className={`
                relative flex items-center justify-center w-14 h-14 rounded-xl border border-neutral-200 ${item.bgcolor}`}
            >
              {React.cloneElement(item.icon, {
                className: `text-[22px] ${item.iconColor}`,
              })}
            </div>

            <p
              className=" relative text-[17px] sm:text-[18px] mt-4 text-neutral-900 font-semibold tracking-tight"
            >
              {item.Head}
            </p>

            <p
              className=" relative text-[13px] sm:text-[14px] mt-2 leading-5 text-neutral-500 max-w-[210px]"
            >
              {item.Des}
            </p>

            <div className="relative flex items-center justify-between mt-auto pt-6">
                <Link to={item?.to}>
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center gap-2 text-[#614ef4] text-[13px] font-semibold cursor-pointer"
              >
                <span>Explore</span>

                <FaArrowRight className="text-[12px]" />
              </motion.div>
              </Link>

              {/* <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: -8,
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 border border-neutral-200
                  text-neutral-700 cursor-pointer
                "
              >
                <FaArrowRight className="text-[11px]" />
              </motion.div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;