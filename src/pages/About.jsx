import React from "react";
import im from "../assests/about/profile.png";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaRegHeart,
} from "react-icons/fa6";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { RxPeople } from "react-icons/rx";
import reactimg from "../assests/about/react.svg";
import tailwind_css from "../assests/about/tailwind_css.jpg";
import framerimg from "../assests/about/OIP.webp";
import javaimg from "../assests/about/javascript.jpg";
import { FaCheck } from "react-icons/fa6";
import faceimg from "../assests/about/face.jpeg";
import signature from "../assests/about/signature.png";
import feedback from "../assests/about/feedback.png";
import { MdEmail } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { motion } from "motion/react";

const About = () => {
  const detail = [
    {
      id: 1,
      icon: <FaRegHeart />,
      title: "Open Source",
      des: "Free for everyone",
      iconcolor: "text-pink-500",
    },
    {
      id: 2,
      icon: <HiOutlineLightningBolt />,
      title: "Built with Passion",
      des: "For the developer community",
      iconcolor: "text-orange-500",
    },
    {
      id: 3,
      icon: <RxPeople />,
      title: "Learn & Explore",
      des: "Use, modify, and make it yours",
      iconcolor: "text-purple-600",
    },
  ];

  const techstack = [
    {
      id: 1,
      head: "React",
      img: reactimg,
    },
    {
      id: 2,
      head: "Tailwind CSS",
      img: tailwind_css,
    },
    {
      id: 3,
      head: "Framer Motion",
      img: framerimg,
    },
    {
      id: 4,
      head: "JavaScript",
      img: javaimg,
    },
  ];

  const points = [
    {
      id: 1,
      text: "Real-world animation examples",
    },
    {
      id: 2,
      text: "clean and reusable code",
    },
    {
      id: 3,
      text: "Beginner-friendly and easy to understand",
    },
    {
      id: 4,
      text: "Continuously updated with new ideas",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden scrollbar_hide">
      <div className="max-w-[1400px] mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-[8%]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          <motion.div
            initial={{ x: -3000 }}
            animate={{ x: 0 }}
            transition={{
              type: "tween",
              duration: 1.5,
              // delay: 0.5,
              velocity: 0.6,
            }}
            className="flex w-full flex-col px-0 sm:px-2 lg:w-[80%] lg:px-3"
          >
            <div className="w-fit rounded-xl border border-purple-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-600 sm:px-4 sm:py-2 sm:text-xs lg:text-sm">
              About AnimateKit
            </div>

            <h2 className="mt-5 text-start text-[42px] font-black leading-[0.95] tracking-[-0.04em] text-[#101828] sm:text-[54px] md:text-[62px] lg:mt-6 lg:text-[68px] xl:text-[85px]">
              Small Interactions.
              <br />
              <span className="bg-[linear-gradient(45deg,#1dd1a1_0%,#ff6b6b_37%,#48dbfb_41%,#feca57_68%)] bg-clip-text text-transparent">
                Big Impact.
              </span>
            </h2>

            <p className="mt-5 max-w-[680px] text-left text-[15px] leading-6 tracking-wide text-gray-600 sm:mt-6 sm:text-[17px] sm:leading-7 md:text-[19px] lg:text-[20px] xl:text-[21px]">
              AnimateKit is a growing collection of modern UI animations,
              interactive components, page transitions, and motion experiments
              built with React, Tailwind CSS, and Framer Motion. I created this
              project as a dedicated space to explore creative frontend
              interactions, experiment with different animation techniques, and
              understand how motion can improve the overall user experience.
              <br />
            </p>

            {/* DETAILS */}
            <div className="mt-7 flex w-full flex-col sm:mt-8 sm:flex-row sm:items-stretch divide-x divide-neutral-200">
              {detail.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 py-3 sm:px-4 sm:py-0 first:sm:pl-0 last:sm:pr-0"
                >
                  <span
                    className={`${item.iconcolor} flex shrink-0 items-center justify-center text-[24px] sm:text-[26px]`}
                  >
                    {item.icon}
                  </span>

                  <div className="flex min-w-0 flex-col">
                    <span className="text-[12px] font-bold leading-5 text-[#202124] sm:text-[13px] lg:text-[14px]">
                      {item.title}
                    </span>

                    <span className="text-[10px] leading-4 text-gray-500 sm:text-[11px] lg:text-[12px]">
                      {item.des}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{
              type: "tween",
              duration: 1.5,
              velocity: 0.6,
            }}
            className="mt-10 flex w-full items-center justify-center lg:mt-0 lg:w-[55%] lg:justify-end"
          >
            <img
              src={im}
              alt="AnimateKit illustration"
              className="h-auto w-full max-w-[430px] object-contain sm:max-w-[500px] lg:max-w-[540px]"
            />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-[92%] max-w-[1280px] flex-col divide-y divide-neutral-200 lg:w-[90%] lg:flex-row lg:divide-x lg:divide-y-0">
        <motion.div
          initial={{ x: "-100%",opacity:0 }}
          whileInView={{ x: 0 ,opacity:1}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="flex w-full flex-col pb-10 lg:w-[55%] lg:pr-10 lg:pb-0"
        >
          <div className="w-fit rounded-xl bg-white px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-purple-600 sm:px-4 sm:py-2 sm:text-[10px]">
            Tech Stack
          </div>

          <h2 className="mt-2 text-[28px] font-black leading-tight text-[#111827] sm:text-[32px] lg:text-[30px] xl:text-[32px]">
            Built With Modern Tools
          </h2>

          <p className="mt-2 max-w-[560px] text-[13px] leading-5 tracking-wide text-gray-500 sm:text-[14px] sm:leading-6">
            A combination of powerful technologies to bring smooth and beautiful
            animations to the web.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {techstack?.map((item) => (
              <div
                key={item?.id}
                className="flex h-[105px] flex-col items-center justify-center rounded-xl border border-neutral-100 bg-white px-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 sm:h-[110px]"
              >
                <div className="flex h-[48px] w-[48px] items-center justify-center sm:h-[52px] sm:w-[52px]">
                  <img
                    src={item?.img}
                    alt={item?.head}
                    className="h-full w-full object-contain"
                  />
                </div>

                <span className="mt-2 text-[11px] font-semibold text-[#111827] sm:text-xs">
                  {item?.head}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
           initial={{ x: "calc(100%)" , opacity:0}}
          whileInView={{ x: 0 ,opacity:1}}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="flex w-full flex-col pb-10 pl-10 lg:w-[55%] lg:pr-10 lg:pb-0"
        >
          <div className="w-fit rounded-xl bg-white px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-purple-600 sm:px-4 sm:py-2 sm:text-[10px]">
            Why AnimateKit
          </div>

          <h2 className="mt-2 text-[28px] font-black leading-tight text-[#111827] sm:text-[32px] lg:text-[30px] xl:text-[32px]">
            More Than Just Animations
          </h2>

          <p className="mt-2 max-w-[520px] text-[13px] leading-5 tracking-wide text-gray-500 sm:text-[14px] sm:leading-6">
            This isn't just a collection of effects — it's a playground to
            learn, experiment, and get inspired. Whether you're a fellow
            developer, designer, or just someone who loves beautiful interfaces,
            I hope AnimateKit helps you build something amazing.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            {points?.map((item) => (
              <div key={item?.id} className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white">
                  <FaCheck className="text-[10px]" />
                </div>

                <span className="text-[13px] font-medium text-gray-600 sm:text-[14px]">
                  {item?.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "tween",
          duration: 1.5,
        }}
        className="w-full px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="relative mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-white/60 bg-white/45 shadow-[0_20px_70px_rgba(124,58,237,0.10)] backdrop-blur-2xl backdrop-saturate-150 sm:rounded-[32px] lg:min-h-[250px] lg:flex-row">
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-10 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

          <div className="relative flex min-h-[260px] w-full items-end justify-center overflow-hidden sm:min-h-[300px] lg:min-h-[250px] lg:w-[28%]">
            <div className="absolute left-1/2 top-1/2 h-[190px] w-[150px] -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] rounded-[55%_45%_48%_52%] bg-gradient-to-br from-purple-200/90 via-purple-300/60 to-purple-100/50 blur-[0.5px] sm:h-[215px] sm:w-[175px]" />

            <div className="absolute left-[32%] top-[25%] h-[80px] w-[100px] rounded-full bg-purple-100/70 blur-xl" />

            <img
              src={faceimg}
              alt="Rajul Gupta"
              className="relative z-10 h-[270px] w-auto max-w-none object-contain sm:h-[315px] lg:h-[255px]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 78%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 78%, transparent 100%)",
              }}
            />
          </div>

          {/* CENTER - PROFILE */}
          <div className="relative flex w-full flex-col justify-center px-7 py-8 sm:px-10 sm:py-9 lg:w-[44%] lg:border-l lg:border-r lg:border-purple-200/60 lg:px-10 lg:py-7">
            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-purple-500 sm:text-[11px]">
              Created By
            </div>

            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-[30px]">
              Rajul Gupta
            </h2>

            <p className="mt-1 text-sm font-semibold text-slate-800 sm:text-[15px]">
              Frontend Developer
            </p>

            <p className="mt-2 max-w-[440px] text-xs leading-[1.7] text-slate-600 sm:text-sm">
              I'm a passionate frontend developer who loves building modern,
              interactive and visually engaging web experiences using React and
              animation.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://github.com/rajul2911"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white/60 text-[18px] text-slate-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rajulgupta2911/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white/60 text-[17px] text-slate-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:rajulgupta2911@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white/60 text-[19px] text-slate-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <MdEmail />
              </a>
            </div>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center px-7 py-9 text-center sm:px-12 sm:py-10 lg:w-[28%] lg:px-8 lg:py-7">
            <div className="absolute left-7 top-5 select-none font-serif text-[64px] font-bold leading-none text-purple-200/80 sm:left-10 lg:left-7">
              “
            </div>

            <p className="relative z-10 max-w-[270px] pt-5 font-serif text-[15px] font-medium italic leading-[1.8] text-slate-700 sm:text-base lg:text-[18px]">
              Good design is invisible.
              <br />
              Great motion makes it feel alive.
            </p>

            <img
              src={signature}
              alt="Rajul Gupta signature"
              className="mt-4 h-auto w-[900px] object-contain opacity-80 sm:w-[1000px] lg:w-[1050px]"
            />
          </div>
        </div>
      </motion.div>

      <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/45 px-5 py-5 shadow-[0_15px_50px_rgba(124,58,237,0.08)] backdrop-blur-2xl backdrop-saturate-150 sm:px-6 sm:py-6 lg:min-h-[100px] lg:flex-row lg:items-center lg:px-7 lg:py-5">
          <div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-0 h-48 w-48 rounded-full bg-purple-200/20 blur-3xl" />

          <div className="relative z-10 flex shrink-0 items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-purple-100/80 bg-purple-100/60 shadow-[0_5px_25px_rgba(139,92,246,0.10)] backdrop-blur-md sm:h-16 sm:w-16">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-500/20 sm:h-10 sm:w-10">
                <BsBox />
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-4 flex-1 sm:mt-5 lg:ml-7 lg:mt-0">
            <h3 className="text-base font-bold tracking-[-0.02em] text-slate-900 sm:text-lg lg:text-[15px]">
              Let's Build Beautiful Web Experiences Together
            </h3>

            <p className="mt-1 max-w-[650px] text-[11px] leading-[1.6] text-slate-500 sm:text-xs lg:text-[10px]">
              Explore the animations, use the code, get inspired and create
              something amazing.
              <br className="hidden sm:block" />
              If you have suggestions, ideas or just want to say hi, feel free
              to reach out!
            </p>
          </div>

          <div className="relative z-10 mt-5 shrink-0 sm:mt-6 lg:mx-8 lg:mt-0">
            <a
              href="mailto:rajulgupta2911@gmail.com"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-6 py-3 text-xs font-medium text-white shadow-[0_8px_25px_rgba(124,58,237,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(124,58,237,0.35)] sm:w-fit sm:px-7 sm:py-3.5"
            >
              <FaEnvelope className="text-[12px]" />
              <span>Say Hello</span>
              <FaArrowRight className="text-[11px] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative z-10 mt-5 flex shrink-0 items-center justify-center sm:mt-6 lg:mt-0 lg:w-[135px]">
            <img
              src={feedback}
              alt="Ideas, Feedback, Collaboration"
              className="h-auto w-[145px] object-contain opacity-90 sm:w-[165px] lg:w-[125px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
