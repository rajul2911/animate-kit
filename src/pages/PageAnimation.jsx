import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animations } from "../files&codes/PageAnimationCodeShow";


// const animations = [
//   {
//     id: "pagination-one",
//     name: "Pagination One",
//     route: "page-animation-one",

//     files: [
//       {
//         name: "index.jsx",
//         code: `import React from "react";

// const PageAnimationOne = () => {
//   return (
//     <div>
//       Your Pagination One component
//     </div>
//   );
// };

// export default PageAnimationOne;`,
//       },

//       {
//         name: "style.scss",
//         code: `.page-animation-one {
//   width: 100%;
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }`,
//       },
//     ],
//   },

//   {
//     id: "pagination-two",
//     name: "Pagination Two",
//     route: "page-animation-two",

//     files: [
//       {
//         name: "index.jsx",
//         code: `import React from "react";

// const PageAnimationTwo = () => {
//   return (
//     <div>
//       Your Pagination Two component
//     </div>
//   );
// };

// export default PageAnimationTwo;`,
//       },
//     ],
//   },

//   {
//     id: "pagination-three",
//     name: "Pagination Three",
//     route: "page-animation-three",

//     files: [
//       {
//         name: "index.jsx",
//         code: `import React from "react";

// const PageAnimationThree = () => {
//   return (
//     <div>
//       Your Pagination Three component
//     </div>
//   );
// };

// export default PageAnimationThree;`,
//       },

//       {
//         name: "style.scss",
//         code: `.page-animation-three {
//   width: 100%;
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }`,
//       },
//     ],
//   },
// ];

const PageAnimation = () => {
  const [activeAnimation, setActiveAnimation] = useState(0);
  const [activeFile, setActiveFile] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentAnimation = animations[activeAnimation];
  const currentFile = currentAnimation.files[activeFile];

  const handleAnimationChange = (index) => {
    setActiveAnimation(index);
    setActiveFile(0);
    setCopied(false);
  };

  const handleFileChange = (index) => {
    setActiveFile(index);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentFile.code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-5 py-20">
      <div className="mx-auto w-full max-w-[1100px]">
        {/* ================= HEADER ================= */}

        <div className="mb-11 text-center">
          <p className="mb-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#777]">
            Page Transitions
          </p>

          <h1 className="m-0 text-5xl font-bold leading-tight text-[#111]">
            Page Animation
          </h1>

          <p className="mx-auto mt-4 max-w-[550px] text-base leading-relaxed text-[#777]">
            Explore different page transition animations and their source code.
          </p>
        </div>

        {/* ================= PAGINATION TABS ================= */}

        <div className="mx-auto mb-[30px] flex w-fit items-center gap-2 roundanimationsed-xl bg-[#e9e9e9] p-1">
          {animations.map((animation, index) => {
            const isActive = activeAnimation === index;

            return (
              <button
                key={animation.id}
                type="button"
                onClick={() => handleAnimationChange(index)}
                className={`
                  cursor-pointer rounded-lg border-0 px-[22px] py-3
                  text-sm font-semibold transition-all duration-200
                  ${
                    isActive
                      ? "bg-white text-[#111] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                      : "bg-transparent text-[#666] hover:text-[#111]"
                  }
                `}
              >
                {animation.name}
              </button>
            );
          })}
        </div>

        {/* ================= CODE SECTION ================= */}

        <section className="overflow-hidden rounded-[14px] border border-[#dedede] bg-white">
          {/* ================= FILE TABS ================= */}

          <div className="flex min-h-[58px] items-center justify-between border-b border-[#e5e5e5] bg-[#fafafa]">
            <div className="flex h-[58px] items-stretch">
              {currentAnimation.files.map((file, index) => {
                const isActive = activeFile === index;

                return (
                  <button
                    key={file.name}
                    type="button"
                    onClick={() => handleFileChange(index)}
                    className={`
                      cursor-pointer border-0 border-r border-[#e5e5e5]
                      px-[22px] font-mono text-sm transition-all duration-200
                      ${
                        isActive
                          ? "bg-white font-semibold text-[#111]"
                          : "bg-transparent text-[#777] hover:bg-[#f1f1f1] hover:text-[#222]"
                      }
                    `}
                  >
                    {file.name}
                  </button>
                );
              })}
            </div>

            {/* ================= COPY BUTTON ================= */}

            <button
              type="button"
              onClick={handleCopy}
              className="
                mr-[15px] cursor-pointer rounded-[7px]
                border border-[#d5d5d5] bg-white
                px-[15px] py-2
                text-[13px] font-semibold text-[#333]
                transition-all duration-200
                hover:bg-[#f0f0f0]
              "
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* ================= CODE WINDOW ================= */}

          <div className="min-h-[450px] bg-[#FFFFFF]">
            {/* Browser / Editor Top Bar */}

            <div
              className="
              flex h-[45px] items-center gap-[6px]
              border-b border-[#292929]
              px-[18px]
            "
            >
              <span className="h-[9px] w-[9px] rounded-full bg-[orange]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[green]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[red]" />

              <p
                className="
                mx-auto translate-x-[-20px]
                font-mono text-xs text-black
              "
              >
                {currentFile.name}
              </p>
            </div>

            {/* Actual Code */}

            <pre className=" max-h-[400px] m-0 overflow-x-auto p-7">
              <code
                className="
                whitespace-pre
                font-mono text-sm leading-[1.7]
                text-[black]
              "
              >
                {currentFile.code}
              </code>
            </pre>
          </div>
        </section>

        {/* ================= EXPLORE ANIMATION ================= */}

        <div className="mt-[35px] flex justify-center">
          <Link
            to={currentAnimation.route}
            className="
              inline-flex items-center gap-3
              rounded-lg border border-[#d7d7d7]
              bg-white px-5 py-3.5
              text-sm font-semibold text-[#111]
              no-underline
              transition-all duration-200
              hover:border-[#111]
              hover:bg-[#111]
              hover:text-white
            "
          >
            <span>Explore Animation</span>

            <span
              className="
              text-lg
              transition-transform duration-200
              group-hover:translate-x-1
            "
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PageAnimation;
