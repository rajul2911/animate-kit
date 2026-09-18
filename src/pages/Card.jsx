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
    Head: "Menu Animations",
    Des: "Creative text reveals and typography effects.",
    icon: <GoStack />,
    iconColor: "text-[#e7439b]",
    bgcolor: "bg-[#fdeaf5]",
    to: "/menu-animation",
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
  // {
  //   id: 5,
  //   Head: "UI Interactions",
  //   Des: "Buttons, cards, menus and more.",
  //   icon: <GoStack />,
  //   iconColor: "text-[#8b42ed]",
  //   bgcolor: "bg-[#f1e9ff]",
  //   to: "/ui-interactions",
  // },
  // {
  //   id: 6,
  //   Head: "Media Animations",
  //   Des: "Image, video and gallery effects.",
  //   icon: <GoStack />,
  //   iconColor: "text-[#f59b20]",
  //   bgcolor: "bg-[#fff4df]",
  //   to: "/media-animation",
  // },
  // {
  //   id: 7,
  //   Head: "3D & Parallax",
  //   Des: "Depth, perspective and immersive motion.",
  //   icon: <GoStack />,
  //   iconColor: "text-[#18a8c4]",
  //   bgcolor: "bg-[#e5f9fc]",
  //   to: "/3d-parallax",
  // },
  // {
  //   id: 8,
  //   Head: "Creative Experiments",
  //   Des: "Fun and unique motion ideas.",
  //   icon: <GoStack />,
  //   iconColor: "text-[#ed4e9d]",
  //   bgcolor: "bg-[#fdeaf5]",
  //   to: "/creative-experiments",
  // },
];

const Card = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {details.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            whileHover={{
              y: -4,
              boxShadow: "0 12px 30px rgba(30, 41, 59, 0.08)",
            }}
            className="relative overflow-hidden flex items-center w-full min-h-[100px] rounded-xl border border-neutral-200 bg-white px-4 py-4 shadow-[0_4px_20px_rgba(30,41,59,0.04)] transition-shadow duration-300"
          >
            <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br from-purple-100/50 to-blue-100/30 blur-[1px]" />

            <div
              className={`relative flex shrink-0 items-center justify-center w-12 h-12 rounded-xl border border-neutral-200 ${item.bgcolor}`}
            >
              {React.cloneElement(item.icon, {
                className: `text-[20px] ${item.iconColor}`,
              })}
            </div>

            <div className="relative min-w-0 flex-1 ml-3">
              <p className="text-[14px] sm:text-[15px] font-semibold text-neutral-900 tracking-tight truncate">
                {item.Head}
              </p>

              <p className="mt-1 text-[11px] sm:text-[12px] leading-[17px] text-neutral-500 line-clamp-2">
                {item.Des}
              </p>
            </div>

            <Link to={item.to} className="relative shrink-0 ml-3">
              <motion.div
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-8 h-8 rounded-full text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <FaArrowRight className="text-[11px]" />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;
