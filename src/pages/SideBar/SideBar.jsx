import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiInfo,
  FiLayers,
  FiType,
  FiMousePointer,
  FiBox,
  FiArrowUpRight,
  FiChevronDown,
  FiChevronUp,
  FiArrowRight,
} from "react-icons/fi";
import logo from "../../assests/motionlab.png";
import { motion, LayoutGroup } from "motion/react";
import { FaGithub } from "react-icons/fa6";

const animationDetails = [
  {
    id: 1,
    name: "Page animations",
    icon: <FiLayers />,
    subhead: [
      { id: 11, text: "Page Animation One", route: "/page-one" },
      { id: 12, text: "Page Animation Two", route: "/page-two" },
      { id: 13, text: "Page Animation Three", route: "/page-three" },
    ],
  },

  {
    id: 2,
    name: "Scroll animations",
    icon: <FiArrowUpRight />,
    subhead: [
      { id: 21, text: "Parallax Scroll", route: "/parallax-scroll" },
      { id: 22, text: "Card Parallax", route: "/card-parallax" },
      { id: 23, text: "Zoom Parallax", route: "/zoom-parallax" },
      { id: 24, text: "Text Gradient", route: "/text-gradient" },
      { id: 25, text: "Perspective Scroll", route: "/perspective-scroll" },
    ],
  },

  {
    id: 3,
    name: "Menu Animations",
    icon: <FiType />,
    subhead: [{ id: 31, text: "SideBar Curve", route: "/sidebar-curve" },
     { id: 32, text: "SideBar Menu", route: "/sidebar-menu" },
    ]
  },

  {
    id: 4,
    name: "Cursor animations",
    icon: <FiMousePointer />,
    subhead: [
      { id: 41, text: "Mask cursor", route: "/mask-cursor" },
      { id: 42, text: "Sticky cursor", route: "/sticky-cursor" }
    ],
  },

  // {
  //   id: 5,
  //   name: "UI animations",
  //   icon: <FiBox />,
  //   subhead: [
  //     { id: 51, text: "Button interactions", route: "/ui/buttons" },
  //     { id: 52, text: "Card interactions", route: "/ui/cards" },
  //     { id: 53, text: "Modal animations", route: "/ui/modals" },
  //   ],
  // },

  // {
  //   id: 6,
  //   name: "3D animations",
  //   icon: <FiBox />,
  //   subhead: [
  //     { id: 61, text: "3D cards", route: "/3d/cards" },
  //     { id: 62, text: "3D objects", route: "/3d/objects" },
  //     { id: 63, text: "3D parallax", route: "/3d/parallax" },
  //   ],
  // },
];

const SideBar = ({ onNavigate }) => {
  const location = useLocation();

  const [openSections, setOpenSections] = useState({
    1: true,
    2: true,
  });

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isActive = (route) => location.pathname === route;

  // Automatically open the section containing the active route
  useEffect(() => {
    const activeSection = animationDetails.find((item) =>
      item.subhead.some((subItem) => location.pathname === subItem.route),
    );

    if (activeSection) {
      setOpenSections((prev) => ({
        ...prev,
        [activeSection.id]: true,
      }));
    }
  }, [location.pathname]);

  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <aside className="flex h-full min-h-0 w-full flex-col bg-white px-4 py-4 sm:px-5 lg:h-screen lg:w-[260px] lg:border-r lg:border-neutral-200">
      <div className="mb-6 flex shrink-0 items-center gap-2 sm:mb-8">
        <img src={logo} alt="MotionLab" className="h-10 w-10 object-contain" />

        <div className="flex min-w-0 flex-col">
          <span className="text-[20px] font-bold leading-5 text-[#111827]">
            MotionLab
          </span>

          <span className="mt-1 text-[10px] font-medium text-[#64748b]">
            Animate. Learn. Build.
          </span>
        </div>
      </div>

      <nav className="flex shrink-0 flex-col gap-1">
        <Link
          to="/"
          onClick={handleNavigate}
          className={`flex h-10 items-center gap-3 rounded-lg px-3 text-[14px] font-semibold transition-all sm:gap-4 ${
            isActive("/")
              ? "bg-secondary text-ink-soft"
              : "text-secondary-foreground hover:bg-secondary"
          }`}
        >
          <FiHome className="shrink-0 text-[17px]" />
          <span>Home</span>
        </Link>

        <Link
          to="/about"
          onClick={handleNavigate}
          className={`flex h-10 items-center gap-3 rounded-lg px-3 text-[14px] font-semibold transition-all sm:gap-4 ${
            isActive("/about")
              ? "bg-secondary text-ink-soft"
              : "text-secondary-foreground hover:bg-secondary"
          }`}
        >
          <FiInfo className="shrink-0 text-[17px]" />
          <span>About</span>
        </Link>
      </nav>

      <div className="mt-6 min-h-0 flex-1 overflow-y-auto scrollbar-hide sm:mt-8">
        <p className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
          Animations
        </p>
        <LayoutGroup>
          <div className="flex flex-col gap-1 pb-4">
            {animationDetails.map((item) => {
              const isOpen = openSections[item.id];

              const isSectionActive = item.subhead.some(
                (subItem) => location.pathname === subItem.route,
              );

              return (
                <div key={item.id}>
                  <button
                    type="button"
                    onClick={() => toggleSection(item.id)}
                    className={`relative flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[13px] font-semibold transition-all sm:text-[14px] ${
                      isSectionActive
                        ? "text-ink-soft"
                        : "text-secondary-foreground hover:bg-secondary"
                    }`}
                  >
                    {isSectionActive && (
                      <motion.div
                        layoutId="active-section"
                        className="absolute inset-0 rounded-lg bg-secondary"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}

                    <div className="relative z-10 flex min-w-0 items-center gap-3 sm:gap-4">
                      <span className="shrink-0 text-[17px]">{item.icon}</span>

                      <span className="truncate">{item.name}</span>
                    </div>

                    <div className="relative z-10">
                      {isOpen ? (
                        <FiChevronUp className="ml-2 shrink-0 text-[15px]" />
                      ) : (
                        <FiChevronDown className="ml-2 shrink-0 text-[15px]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="ml-[22px] mt-2 border-l border-[#cbdfe1] pl-4 sm:pl-5">
                      {item.subhead.map((subItem) => {
                        const active = isActive(subItem.route);

                        return (
                          <Link
                            key={subItem.id}
                            to={subItem.route}
                            onClick={handleNavigate}
                            className={`relative block rounded-lg px-3 py-2 text-[12px] leading-5 transition-colors sm:text-[13px] ${
                              active
                                ? "font-semibold text-ink-soft"
                                : "text-secondary-foreground hover:text-ink-soft"
                            }`}
                          >
                            {active && (
                              <motion.div
                                layoutId="active-subitem"
                                className="absolute inset-0 rounded-lg bg-accent"
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 35,
                                }}
                              />
                            )}

                            <span className="relative z-10">
                              {subItem.text}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </LayoutGroup>
      <a
        href="https://github.com/rajul2911/animate-kit"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-full items-center gap-3 rounded-xl bg-muted px-4 py-3 transition-all duration-300 hover:shadow-sm hover:bg-coral hover:text-white"
      >
        <FaGithub className="h-7 w-7 shrink-0 text-foreground group-hover:text-white" />
        
        <div className="flex-1">
          <p className="text-[13px] font-semibold leading-tight text-foreground group-hover:text-white">
            Star on GitHub
          </p>
          <p className="mt-1 text-[10px] leading-tight text-muted-foreground group-hover:text-white">
            If you find this helpful!
          </p>
        </div>
        
        <FiArrowRight className="h-5 w-5 text-foreground group-hover:text-white" />
      </a>
      </div>
    </aside>
  );
};

export default SideBar;
