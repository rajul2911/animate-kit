export const SWcrollAnimations = [
  {
    id: "scroll-one",
    name: "Parallax Scroll Animation",
    route: "scroll-animation-one",
    files: [
      {
        name: "ScrollOne.jsx",
        code: `const images = [
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
      className="relative flex flex-col lg:gap-10 gap-3 lg:p-3 p-1 overflow-hidden w-1/4"
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={\`Parallax item \${index + 1}\`}
          className="h-full w-full rounded-[10px] object-cover"
        />
      ))}
    </motion.div>
  );
};

const ScrollOne = () => {
  const container = useRef(null);

  const [height, setHeight] = useState(0);

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

  // Lenis smooth scrolling
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

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <main className="">
      <div className="h-screen flex items-center justify-center lg:text-[140px] md:text-[100px] sm:text-[80px] text-[60px]">
        Scroll Down
      </div>

      <section
        ref={container}
        className="flex box-border gap-2 p-2 bg-[rgb(45,45,45)] overflow-hidden h-[150vh]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y1} top="-60%" />

        <Column images={[images[3], images[4], images[5]]} y={y2} top="-110%" />

        <Column images={[images[6], images[7], images[8]]} y={y3} top="-40%" />

        <Column
          images={[images[9], images[10], images[11]]}
          y={y4}
          top="-100%"
        />
      </section>

      <div className="h-screen flex items-center justify-center lg:text-[140px] md:text-[100px] sm:text-[80px] text-[60px]">
        Scroll Up
      </div>
    </main>
  );
};

export default ScrollOne;
`,
      },
     
    ],
  },
//   {
//     id: "pagination-two",
//     name: "Pagination Two",
//     route: "page-animation-two",
//     files: [
//       {
//         name: "PageAnimationTwo.jsx",
//         code: \`import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Link, useLocation, useOutlet } from "react-router-dom";

// const expand = {
//   initial: {
//     top: 0,
//   },
//   enter: (i) => ({
//     top: "100vh",
//     transition: {
//       duration: 0.4,
//       delay: 0.05 * i,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//     transitionEnd: {
//       height: "0",
//       top: "0",
//     },
//   }),
//   exit: (i) => ({
//     height: "100vh",
//     transition: {
//       duration: 0.4,
//       delay: 0.05 * i,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//   }),
// };

// const PageAnimationTwo = () => {
//   const location = useLocation();
//   const outlet = useOutlet();
//   const nbOfColumns = 5;

//   return (
//     <div className="relative min-h-screen">
//       <header className="flex flex-col p-10">
//         <span className="text-[24px] font-black uppercase">
//           Page Animation Two
//         </span>
//         <nav className="mt-4 flex gap-4">
//           <Link to="." className="text-[18px] font-semibold">
//             Home
//           </Link>
//           <Link to="about-two" className="text-[18px] font-semibold">
//             About
//           </Link>
//           <Link to="contact-two" className="text-[18px] font-semibold">
//             Contact
//           </Link>
//         </nav>
//       </header>

//       <main className="px-10">{outlet}</main>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={location.pathname}
//           className="fixed inset-0 z-[50] pointer-events-none"
//         >
//           <div className="fixed left-0 top-0 flex h-screen w-screen pointer-events-none">
//             {[...Array(nbOfColumns)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 variants={expand}
//                 custom={nbOfColumns - i}
//                 initial="initial"
//                 animate="enter"
//                 exit="exit"
//                 className="relative h-full w-full bg-black"
//               />
//             ))}
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default PageAnimationTwo;\`,
//       },
//     ],
//   },
 
];