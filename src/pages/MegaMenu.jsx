import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const menu = [
  {
    id: 1,
    head: "Page Animations",
    route: "/page-animations",
    subhead: [
      {
        id: 11,
        title: "Fade In",
        route: "/page-animations/fade-in",
      },
      {
        id: 12,
        title: "Slide Up",
        route: "/page-animations/slide-up",
      },
      {
        id: 13,
        title: "Scale In",
        route: "/page-animations/scale-in",
      },
    ],
  },
  {
    id: 2,
    head: "Cursor Effects",
    route: "/cursor-effects",
    subhead: [
      {
        id: 21,
        title: "Magnetic Cursor",
        route: "/cursor-effects/magnetic",
      },
      {
        id: 22,
        title: "Mask Cursor",
        route: "/cursor-effects/mask",
      },
      {
        id: 23,
        title: "Custom Cursor",
        route: "/cursor-effects/custom",
      },
    ],
  },
  {
    id: 3,
    head: "Scroll Animations",
    route: "/scroll-animations",
    subhead: [
      {
        id: 31,
        title: "Parallax Scroll",
        route: "/scroll-animations/parallax",
      },
      {
        id: 32,
        title: "Reveal On Scroll",
        route: "/scroll-animations/reveal",
      },
      {
        id: 33,
        title: "Horizontal Scroll",
        route: "/scroll-animations/horizontal",
      },
    ],
  },
  {
    id: 4,
    head: "Text Animations",
    route: "/text-animations",
    subhead: [
      {
        id: 41,
        title: "Text Reveal",
        route: "/text-animations/reveal",
      },
      {
        id: 42,
        title: "Character Stagger",
        route: "/text-animations/stagger",
      },
      {
        id: 43,
        title: "Split Text",
        route: "/text-animations/split",
      },
    ],
  },
  {
    id: 5,
    head: "Card Animations",
    route: "/card-animations",
    subhead: [
      {
        id: 51,
        title: "3D Card",
        route: "/card-animations/3d",
      },
      {
        id: 52,
        title: "Card Parallax",
        route: "/card-animations/parallax",
      },
      {
        id: 53,
        title: "Hover Card",
        route: "/card-animations/hover",
      },
    ],
  },
  {
    id: 6,
    head: "SVG Animations",
    route: "/svg-animations",
    subhead: [
      {
        id: 61,
        title: "Path Drawing",
        route: "/svg-animations/path",
      },
      {
        id: 62,
        title: "Morphing",
        route: "/svg-animations/morph",
      },
      {
        id: 63,
        title: "Icon Animation",
        route: "/svg-animations/icon",
      },
    ],
  },
];

const MegaMenu = ({ opneBar, setOpenBar }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <>
      <div
        onMouseEnter={() => setOpenBar(true)}
        onMouseLeave={() => setOpenBar(false)}
        className="relative flex flex-col"
      >
        <motion.button
          onClick={() => setOpenBar(!opneBar)}
          className="relative flex items-center justify-center gap-0.5 py-5 text-sm font-medium text-[#555b70] transition-colors duration-200 hover:text-[#7757ff]"
        >
          Animation
          <motion.div
            animate={{ rotate: opneBar ? 90 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <FiChevronRight />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {opneBar && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: {
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                  duration: 0.25,
                },
              }}
              className="fixed left-0 top-[64px] z-40 w-full overflow-hidden border-b border-gray-200 bg-white"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
                className="mx-auto grid max-w-7xl grid-cols-3 gap-16 px-8 py-8"
              >
                {menu?.map((item) => (
                  <div key={item?.id}>
                    <Link
                      to={item?.route}
                      className="mb-3 block text-[12px] font-normal text-[#6e6e73]"
                    >
                      {item?.head}
                    </Link>

                    <div className="flex flex-col gap-[7px]">
                      {item?.subhead?.map((kt) => (
                        <Link
                          key={kt?.id}
                          to={kt?.route}
                          className="block text-[14px] font-semibold leading-[20px] text-[#1d1d1f] transition-colors duration-200 hover:text-[#7757ff]"
                        >
                          {kt?.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================================
          MOBILE
      ========================================================= */}

      <div className="md:hidden">
        {/* Animation Button */}

        <button
          onClick={openMobileMenu}
          className="flex w-full items-center justify-between border-b border-gray-100 py-3 text-sm font-medium text-[#555b70]"
        >
          Animation

          <FiChevronRight className="text-base" />
        </button>

        {/* Mobile Full Screen Menu */}

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed left-0 top-[64px] z-40 h-[calc(100vh-64px)] w-full overflow-y-auto bg-white"
            >
              {/* Back */}

              <div className="border-b border-gray-200 px-4 py-3">
                <button
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 text-sm text-[#555b70]"
                >
                  <FiChevronRight className="rotate-180" />
                  Animation
                </button>
              </div>

              {/* All Categories + Titles */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                }}
                className="px-4 py-5"
              >
                {menu.map((item) => (
                  <div
                    key={item.id}
                    className="mb-8"
                  >
                    {/* Heading */}

                    <Link
                      to={item.route}
                      onClick={closeMobileMenu}
                      className="mb-3 block text-[13px] font-normal text-[#6e6e73]"
                    >
                      {item.head}
                    </Link>

                    {/* Titles */}

                    <div className="flex flex-col gap-3">
                      {item.subhead.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.route}
                          onClick={closeMobileMenu}
                          className="text-[16px] font-semibold leading-[21px] text-[#1d1d1f]"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MegaMenu;



// import React, { useRef, useState } from "react";
// import { AnimatePresence, motion } from "motion/react";
// import { FiChevronRight } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const menu = [
//   {
//     id: 1,
//     head: "Page Animations",
//     route: "/page-animations",
//     subhead: [
//       { id: 11, title: "Fade In", route: "/page-animations/fade-in" },
//       { id: 12, title: "Slide Up", route: "/page-animations/slide-up" },
//       { id: 13, title: "Scale In", route: "/page-animations/scale-in" },
//     ],
//   },
//   {
//     id: 2,
//     head: "Cursor Effects",
//     route: "/cursor-effects",
//     subhead: [
//       { id: 21, title: "Magnetic Cursor", route: "/cursor-effects/magnetic" },
//       { id: 22, title: "Mask Cursor", route: "/cursor-effects/mask" },
//       { id: 23, title: "Custom Cursor", route: "/cursor-effects/custom" },
//     ],
//   },
//   {
//     id: 3,
//     head: "Scroll Animations",
//     route: "/scroll-animations",
//     subhead: [
//       { id: 31, title: "Parallax Scroll", route: "/scroll-animations/parallax" },
//       { id: 32, title: "Reveal On Scroll", route: "/scroll-animations/reveal" },
//       { id: 33, title: "Horizontal Scroll", route: "/scroll-animations/horizontal" },
//     ],
//   },
//   {
//     id: 4,
//     head: "Text Animations",
//     route: "/text-animations",
//     subhead: [
//       { id: 41, title: "Text Reveal", route: "/text-animations/reveal" },
//       { id: 42, title: "Character Stagger", route: "/text-animations/stagger" },
//       { id: 43, title: "Split Text", route: "/text-animations/split" },
//     ],
//   },
//   {
//     id: 5,
//     head: "Card Animations",
//     route: "/card-animations",
//     subhead: [
//       { id: 51, title: "3D Card", route: "/card-animations/3d" },
//       { id: 52, title: "Card Parallax", route: "/card-animations/parallax" },
//       { id: 53, title: "Hover Card", route: "/card-animations/hover" },
//     ],
//   },
//   {
//     id: 6,
//     head: "SVG Animations",
//     route: "/svg-animations",
//     subhead: [
//       { id: 61, title: "Path Drawing", route: "/svg-animations/path" },
//       { id: 62, title: "Morphing", route: "/svg-animations/morph" },
//       { id: 63, title: "Icon Animation", route: "/svg-animations/icon" },
//     ],
//   },
// ];

// const MegaMenu = ({ openBar, setOpenBar }) => {
//   const closeTimer = useRef(null);

//   // ONLY FOR MOBILE
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // ================= DESKTOP LOGIC =================

//   const openDesktopMenu = () => {
//     clearTimeout(closeTimer.current);
//     setOpenBar(true);
//   };

//   const closeDesktopMenu = () => {
//     closeTimer.current = setTimeout(() => {
//       setOpenBar(false);
//     }, 100);
//   };

//   // ================= MOBILE =================

//   const openMobileMenu = () => {
//     setMobileMenuOpen(true);
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//   };

//   return (
//     <>
//       {/* =========================================================
//           DESKTOP
//       ========================================================= */}

//       <div
//         className="relative hidden h-[64px] md:flex md:items-center"
//         onMouseEnter={openDesktopMenu}
//         onMouseLeave={closeDesktopMenu}
//       >
//         {/* Animation Button */}

//         <button
//           onClick={() => setOpenBar(!openBar)}
//           className="relative flex h-[64px] items-center justify-center gap-0.5 text-sm font-medium text-[#555b70] transition-colors duration-200 hover:text-[#7757ff]"
//         >
//           Animation

//           <motion.div
//             animate={{
//               rotate: openBar ? 90 : 0,
//             }}
//             transition={{
//               duration: 0.25,
//               ease: "easeOut",
//             }}
//           >
//             <FiChevronRight />
//           </motion.div>
//         </button>

//         {/* Desktop Dropdown */}

//         <AnimatePresence>
//           {openBar && (
//             <motion.div
//               initial={{
//                 height: 0,
//                 opacity: 0,
//               }}
//               animate={{
//                 height: "auto",
//                 opacity: 1,
//               }}
//               exit={{
//                 height: 0,
//                 opacity: 0,
//               }}
//               transition={{
//                 height: {
//                   duration: 0.45,
//                   ease: [0.22, 1, 0.36, 1],
//                 },
//                 opacity: {
//                   duration: 0.2,
//                 },
//               }}
//               className="absolute left-1/2 top-full z-40 w-screen -translate-x-1/2 overflow-hidden border-b border-gray-200 bg-white"
//             >
//               <motion.div
//                 initial={{
//                   y: -15,
//                   opacity: 0,
//                 }}
//                 animate={{
//                   y: 0,
//                   opacity: 1,
//                 }}
//                 exit={{
//                   y: -10,
//                   opacity: 0,
//                 }}
//                 transition={{
//                   duration: 0.3,
//                   ease: "easeOut",
//                 }}
//                 className="mx-auto grid max-w-7xl grid-cols-3 gap-x-16 gap-y-16 px-8 py-8"
//               >
//                 {menu.map((item) => (
//                   <div key={item.id}>
//                     <Link
//                       to={item.route}
//                       onClick={() => setOpenBar(false)}
//                       className="mb-3 block text-[12px] font-normal text-[#6e6e73]"
//                     >
//                       {item.head}
//                     </Link>

//                     <div className="flex flex-col gap-[7px]">
//                       {item.subhead.map((subItem) => (
//                         <Link
//                           key={subItem.id}
//                           to={subItem.route}
//                           onClick={() => setOpenBar(false)}
//                           className="block text-[14px] font-semibold leading-[20px] text-[#1d1d1f] transition-colors duration-200 hover:text-[#7757ff]"
//                         >
//                           {subItem.title}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* =========================================================
//           MOBILE
//       ========================================================= */}

//       <div className="md:hidden">
//         {/* Animation Button */}

//         <button
//           onClick={openMobileMenu}
//           className="flex w-full items-center justify-between border-b border-gray-100 py-3 text-sm font-medium text-[#555b70]"
//         >
//           Animation

//           <FiChevronRight className="text-base" />
//         </button>

//         {/* Mobile Full Screen Menu */}

//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{
//                 x: "100%",
//               }}
//               animate={{
//                 x: 0,
//               }}
//               exit={{
//                 x: "100%",
//               }}
//               transition={{
//                 duration: 0.35,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="fixed left-0 top-[64px] z-40 h-[calc(100vh-64px)] w-full overflow-y-auto bg-white"
//             >
//               {/* Back */}

//               <div className="border-b border-gray-200 px-4 py-3">
//                 <button
//                   onClick={closeMobileMenu}
//                   className="flex items-center gap-2 text-sm text-[#555b70]"
//                 >
//                   <FiChevronRight className="rotate-180" />
//                   Animation
//                 </button>
//               </div>

//               {/* All Categories + Titles */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 10,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.3,
//                   delay: 0.1,
//                 }}
//                 className="px-4 py-5"
//               >
//                 {menu.map((item) => (
//                   <div
//                     key={item.id}
//                     className="mb-8"
//                   >
//                     {/* Heading */}

//                     <Link
//                       to={item.route}
//                       onClick={closeMobileMenu}
//                       className="mb-3 block text-[13px] font-normal text-[#6e6e73]"
//                     >
//                       {item.head}
//                     </Link>

//                     {/* Titles */}

//                     <div className="flex flex-col gap-3">
//                       {item.subhead.map((subItem) => (
//                         <Link
//                           key={subItem.id}
//                           to={subItem.route}
//                           onClick={closeMobileMenu}
//                           className="text-[16px] font-semibold leading-[21px] text-[#1d1d1f]"
//                         >
//                           {subItem.title}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };

// export default MegaMenu;