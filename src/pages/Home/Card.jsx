import React from "react";
import { motion } from "motion/react";
import {
  FiGrid,
  FiArrowUp,
  FiType,
  FiMousePointer,
  FiBox,
  FiMove,
  FiLayers,
  FiZap,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { GoStack } from "react-icons/go";
const details = [
  {
    id: 1,
    Head: "Page animations",
    Des: "Smooth transitions between pages and elements.",
    count: "5 animations",
    icon: <FiGrid />,
    iconColor: "text-primary",
    bgcolor: "bg-secondary",
    to: "/page-one",
  },
  {
    id: 2,
    Head: "Scroll animations",
    Des: "Bring your content to life as users scroll.",
    count: "6 animations",
    icon: <FiArrowUp />,
    iconColor: "text-coral",
    bgcolor: "bg-accent",
    to: "/parallax-scroll",
  },
  // {
  //   id: 3,
  //   Head: "Text animations",
  //   Des: "Creative effects and type transformations.",
  //   count: "5 animations",
  //   icon: <FiType />,
  //   iconColor: "text-gold",
  //   bgcolor: "bg-[#f8eedb]",
  //   to: "/text-animation",
  // },
  {
    id: 3,
    Head: "Menu Animations",
    Des: "Creative text reveals and typography effects.",
    count: "5 animations",
    icon: <GoStack />,
    iconColor: "text-[#e7439b]",
    bgcolor: "bg-[#fdeaf5]",
    to: "/sidebar-curve",
  },
  {
    id: 4,
    Head: "Cursor animations",
    Des: "Make every cursor move more engaging.",
    count: "4 animations",
    icon: <FiMousePointer />,
    iconColor: "text-primary",
    bgcolor: "bg-secondary",
    to: "/mask-cursor",
  },
  // {
  //   id: 5,
  //   Head: "UI animations",
  //   Des: "Beautiful, responsive interface components.",
  //   count: "6 animations",
  //   icon: <FiBox />,
  //   iconColor: "text-coral",
  //   bgcolor: "bg-accent",
  //   to: "/ui-animation",
  // },
  // {
  //   id: 6,
  //   Head: "3D animations",
  //   Des: "Dimensional effects for the modern web.",
  //   count: "4 animations",
  //   icon: <FiMove />,
  //   iconColor: "text-gold",
  //   bgcolor: "bg-[#f8eedb]",
  //   to: "/3d-animation",
  // },
  // {
  //   id: 7,
  //   Head: "Layout animations",
  //   Des: "Fluid and dynamic layout transitions.",
  //   count: "4 animations",
  //   icon: <FiLayers />,
  //   iconColor: "text-primary",
  //   bgcolor: "bg-secondary",
  //   to: "/layout-animation",
  // },
  // {
  //   id: 8,
  //   Head: "Creative effects",
  //   Des: "Unique and experimental interactions.",
  //   count: "5 animations",
  //   icon: <FiZap />,
  //   iconColor: "text-coral",
  //   bgcolor: "bg-accent",
  //   to: "/creative-effects",
  // },
];
const Card = () => {
  return (
    <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {details.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="h-[175px] w-full"
        >
          <Link
            to={item.to}
            className="group flex h-full w-full flex-col rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            <div
              className={`mb-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.bgcolor} ${item.iconColor}`}
            >
              <span className="text-[17px]"> {item.icon} </span>
            </div>
            <h3 className="text-[16px] font-bold leading-5 text-foreground">
              {item.Head}
            </h3>
            <p className="mt-1.5 line-clamp-2 max-w-[260px] text-[13px] leading-[1.45] text-ink-soft">
              {item.Des}
            </p>
            {/* Bottom */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[11px] font-medium text-ink-soft">
                {item.count}
              </span>
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-white transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <FiArrowRight className="text-[13px] transition-transform duration-200" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
export default Card;
