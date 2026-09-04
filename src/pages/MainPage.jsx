import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import lab from "../assests/motionlab.png";
import text from "../assests/text.png";
import icon from "../assests/righticon.png";
import { FaStar } from "react-icons/fa6";
import Card from "./Card";

const MainPage = () => {
  const collectionText =
    "A collection of creative UI animations, interaction and motion experiments built with React, Tailwind, Framer Motion. Learn, explore and get inspired.";

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
    <main className=" bg-white text-neutral-900 overflow-hidden">


      {/* Navbar */}

      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full mx-auto flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 lg:px-12 py-4"
      >
        <motion.img
          src={lab}
          alt="Motion Lab logo"
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
          animate={{
            rotate: [0, 4, -4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <p className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wide">
          AnimateKit
        </p>
      </motion.nav>



      {/* Hero */}



      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-16 lg:pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.7fr_1fr] gap-10 lg:gap-8 items-center">


          {/* LEFT TEXT IMAGE */}


          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="hidden lg:flex justify-center"
          >
            <motion.img
              src={text}
              alt="Small Interactions Big Ideas"
              className="w-40 xl:w-48 object-contain"
              animate={{
                y: [0, -50, 0],
                rotate: [-2, 1, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* CENTER CONTENT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="inline-flex items-center gap-2 border border-neutral-300 rounded-full py-2 px-4 mb-6"
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
                <FaStar className="text-blue-700 text-sm" />
              </motion.div>

              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-600">
                Explore • Animate • Create
              </span>
            </motion.div>



            {/* Heading */}


            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[0.95] tracking-tight"
            >
              Turn Ideas Into
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Beautiful Motions
              </motion.span>
            </motion.h1>



            {/* Collection text */}


            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.8,
              }}
              className="mt-7 max-w-2xl mx-auto lg:mx-0"
            >
              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-7">
                <span className="font-mono">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                    }}
                    className="ml-1 text-blue-600 font-bold"
                  >
                    |
                  </motion.span>
                </span>
              </p>
            </motion.div>

            {/* Buttons */}
            {/* <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 1,
              }}
              className="mt-8 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 35px rgba(79,70,229,0.25)",
                }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3.5 rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 font-medium"
              >
                Explore Animations →
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 text-neutral-700 font-medium"
              >
                <span className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center">
                  ▶
                </span>

                Watch Demo
              </motion.button>
            </motion.div> */}

            {/* Stats */}
            {/* <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 1.2,
              }}
              className="mt-12 flex justify-center lg:justify-start gap-6 sm:gap-10"
            >
              <div>
                <p className="text-2xl font-bold">20+</p>
                <p className="text-xs sm:text-sm text-neutral-500">
                  Animation Examples
                </p>
              </div>

              <div className="w-px bg-neutral-300" />

              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs sm:text-sm text-neutral-500">
                  Categories
                </p>
              </div>

              <div className="w-px bg-neutral-300" />

              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs sm:text-sm text-neutral-500">
                  Open Source
                </p>
              </div>
            </motion.div> */}
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.85 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="flex justify-center items-center"
          >
            <motion.img
              src={icon}
              alt="Motion illustration"
              className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] object-contain"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* Mobile Small Interaction Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:hidden flex justify-center mt-10"
        >
          <img
            src={text}
            alt="Small Interactions Big Ideas"
            className="w-40 sm:w-52 object-contain"
          />
        </motion.div>
      </section>

      {/* Category Section */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-purple-600 font-semibold">
            Animation Categories
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Choose a Category
          </h2>

          <p className="mt-3 text-neutral-500">
            Explore different types of animations and interactions.
          </p>
        </motion.div>
      </section>
    </main>


    <Card/>


    </>

  );
};

export default MainPage;
