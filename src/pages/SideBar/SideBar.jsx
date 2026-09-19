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
} from "react-icons/fi";
import logo from "../../assests/motionlab.png";

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
    ],
  },

  {
    id: 3,
    name: "Menu Animations",
    icon: <FiType />,
    subhead: [
      { id: 31, text: "SideBar Curve", route: "/sidebar-curve" },
    ],
  },

  {
    id: 4,
    name: "Cursor animations",
    icon: <FiMousePointer />,
    subhead: [
      { id: 42, text: "Mask cursor", route: "/mask-cursor" },
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
      item.subhead.some(
        (subItem) => location.pathname === subItem.route
      )
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

      {/* Logo */}
      <div className="mb-6 flex shrink-0 items-center gap-2 sm:mb-8">
        <img
          src={logo}
          alt="MotionLab"
          className="h-10 w-10 object-contain"
        />

        <div className="flex min-w-0 flex-col">
          <span className="text-[20px] font-bold leading-5 text-[#111827]">
            MotionLab
          </span>

          <span className="mt-1 text-[10px] font-medium text-[#64748b]">
            Animate. Learn. Build.
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex shrink-0 flex-col gap-1">

        {/* Home */}
        <Link
          to="/"
          onClick={handleNavigate}
          className={`flex h-10 items-center gap-3 rounded-lg px-3 text-[14px] font-semibold transition-all sm:gap-4 ${
            isActive("/")
              ? "bg-[var(--gradient-light-aqua-coral)] text-[#173b4d]"
              : "text-[#52677a] hover:bg-[#f3f8f8]"
          }`}
        >
          <FiHome className="shrink-0 text-[17px]" />
          <span>Home</span>
        </Link>

        {/* About */}
        <Link
          to="/about"
          onClick={handleNavigate}
          className={`flex h-10 items-center gap-3 rounded-lg px-3 text-[14px] font-semibold transition-all sm:gap-4 ${
            isActive("/about")
              ? "bg-[var(--gradient-light-aqua-coral)] text-[#173b4d]"
              : "text-[#52677a] hover:bg-[#f3f8f8]"
          }`}
        >
          <FiInfo className="shrink-0 text-[17px]" />
          <span>About</span>
        </Link>

      </nav>

      {/* Animations */}
      <div className="mt-6 min-h-0 flex-1 overflow-y-auto scrollbar-hide sm:mt-8">

        <p className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-wide text-[#52677a]">
          Animations
        </p>

        <div className="flex flex-col gap-1 pb-4">

          {animationDetails.map((item) => {
            const isOpen = openSections[item.id];

            return (
              <div key={item.id}>

                {/* Category */}
                <button
                  type="button"
                  onClick={() => toggleSection(item.id)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[13px] font-semibold text-[#52677a] transition-all hover:bg-[#f3f8f8] sm:text-[14px]"
                >
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                    <span className="shrink-0 text-[17px]">
                      {item.icon}
                    </span>

                    <span className="truncate">
                      {item.name}
                    </span>

                  </div>

                  {isOpen ? (
                    <FiChevronUp className="ml-2 shrink-0 text-[15px]" />
                  ) : (
                    <FiChevronDown className="ml-2 shrink-0 text-[15px]" />
                  )}
                </button>

                {/* Sub Items */}
                {isOpen && (
                  <div className="ml-[22px] border-l border-[#cbdfe1] pl-4 sm:pl-5">

                    {item.subhead.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={subItem.route}
                        onClick={handleNavigate}
                        className={`block py-2 text-[12px] leading-5 transition-colors sm:text-[13px] ${
                          isActive(subItem.route)
                            ? "font-semibold text-[#173b4d]"
                            : "text-[#52677a] hover:text-[#173b4d]"
                        }`}
                      >
                        {subItem.text}
                      </Link>
                    ))}

                  </div>
                )}

              </div>
            );
          })}

        </div>
      </div>

    </aside>
  );
};

export default SideBar;

