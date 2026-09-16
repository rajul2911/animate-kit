import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import lab from "../assests/motionlab.png";
import text from "../assests/text.png";
import icon from "../assests/righticon.png";
import { FaStar, FaGithub } from "react-icons/fa6";
import Card from "./Card";
// import NavBar from "./NavBar";

const MainPage = () => {
  const collectionText =
    "A collection of creative UI animations, interaction and motion experiments built with React, Tailwind, Motion. Explore, learn and use these components to make your website feel alive.";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      if (index < collectionText.length) {
        setDisplayText(collectionText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 28);

    return () => clearInterval(typing);
  }, []);

  return (
    <>
      <main className="relative overflow-hidden bg-white text-neutral-900">
        {/* ================= HERO ================= */}
        <section className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-14 sm:px-8 sm:pb-14 sm:pt-16 lg:px-12 lg:pb-16 lg:pt-20">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="pointer-events-none absolute left-0 top-[55%] hidden -translate-y-1/2 md:block lg:left-4 xl:left-8"
          >
            <motion.img
              src={text}
              alt="Small Interactions Big Ideas"
              className="w-28 object-contain lg:w-32 xl:w-36"
              animate={{
                y: [0, -20, 0],
                rotate: [-2, 1, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ x: 70, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="pointer-events-none absolute right-0 top-100 hidden md:block lg:right-0 xl:right-4"
          >
            <motion.img
              src={icon}
              alt="Motion illustration"
              className="w-40 object-contain sm:w-48 lg:w-56 xl:w-64"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
            {/* Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1.5 sm:mb-6 sm:px-4"
            >
              <motion.div
                animate={{
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <FaStar className="text-xs text-blue-700 sm:text-sm" />
              </motion.div>

              <span className="text-[9px] uppercase tracking-[0.18em] text-neutral-600 sm:text-[10px] sm:tracking-[0.2em]">
                Explore • Animate • Create
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="max-w-5xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px]"
            >
              Turn Ideas Into Beautiful Motion
            </motion.h1>

            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
              }}
              className="mt-5 w-full max-w-3xl sm:mt-6"
            >
              <p className="text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7 md:text-lg lg:text-lg">
                <span className="font-mono">
                  {displayText}

                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                    }}
                    className="ml-1 font-bold text-blue-600"
                  >
                    |
                  </motion.span>
                </span>
              </p>
            </motion.div>

            {/* Mobile Illustration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.9,
              }}
              className="mt-7 flex flex-col items-righ md:hidden"
            >
              <motion.img
                src={icon}
                alt="Motion illustration"
                className="w-52 object-contain sm:w-60"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <img
                src={text}
                alt="Small Interactions Big Ideas"
                className="mt-2 w-32 object-contain"
              />
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-8 pt-4 sm:px-8 sm:pb-10 lg:px-12 lg:pt-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600 sm:text-sm lg:text-base">
              Animation Categories
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Choose a Category
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7 md:text-lg lg:text-xl">
              Browse different types of animations and interactions. Click on
              any category to see examples and get the code.
            </p>
          </motion.div>
        </section>
      </main>

      {/* Cards */}
      <Card />
    </>
  );
};

export default MainPage;
