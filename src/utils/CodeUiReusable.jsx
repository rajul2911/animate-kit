import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeUiReusable = ({
  animations,
  eyebrow,
  title,
  description,
}) => {
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
    <main className="min-h-screen bg-[#f5f5f5] px-3 py-10 sm:px-5 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1100px]">

        {/* ================= HEADER ================= */}

        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#888] sm:mb-3 sm:text-xs">
            {eyebrow}
          </p>

          <h1 className="m-0 text-3xl font-bold tracking-[-0.03em] text-[#111] sm:text-4xl md:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-3 max-w-[550px] px-2 text-sm leading-relaxed text-[#777] sm:mt-4 sm:px-0 sm:text-base">
            {description}
          </p>
        </div>

        {/* ================= ANIMATION TABS ================= */}

        <div className="mx-auto mb-6 flex w-full max-w-full items-center gap-1 overflow-x-auto rounded-xl border border-[#dedede] bg-[#e9e9e9] p-1.5 sm:mb-8 sm:w-fit">
          {animations.map((animation, index) => {
            const isActive = activeAnimation === index;

            return (
              <button
                key={animation.id}
                type="button"
                onClick={() => handleAnimationChange(index)}
                className={`shrink-0 cursor-pointer rounded-lg border-0 px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:px-5 sm:text-sm ${
                  isActive
                    ? "bg-white text-[#111] shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                    : "bg-transparent text-[#666] hover:bg-white/50 hover:text-[#111]"
                }`}
              >
                {animation.name}
              </button>
            );
          })}
        </div>

        {/* ================= CODE SECTION ================= */}

        <section className="overflow-hidden rounded-xl border border-[#dcdcdc] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:rounded-2xl">

          {/* ================= FILE TABS HEADER ================= */}

          <div className="flex min-h-[58px] items-center justify-between border-b border-[#e5e5e5] bg-[#fafafa]">

            {/* FILE TABS */}

            <div className="flex h-[58px] min-w-0 flex-1 items-stretch overflow-x-auto">
              {currentAnimation.files.map((file, index) => {
                const isActive = activeFile === index;

                return (
                  <button
                    key={file.name}
                    type="button"
                    onClick={() => handleFileChange(index)}
                    className={`relative shrink-0 cursor-pointer border-0 border-r border-[#e5e5e5] px-4 font-mono text-xs transition-all duration-200 sm:px-6 sm:text-sm ${
                      isActive
                        ? "bg-white font-semibold text-[#111]"
                        : "bg-[#fafafa] text-[#777] hover:bg-[#f3f3f3] hover:text-[#222]"
                    }`}
                  >
                    {file.name}

                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#111]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* COPY BUTTON */}

            <button
              type="button"
              onClick={handleCopy}
              className="mr-2 flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-[#d8d8d8] bg-white px-2.5 py-2 text-[11px] font-semibold text-[#333] shadow-sm transition-all duration-200 hover:border-[#bbb] hover:bg-[#f5f5f5] active:scale-95 sm:mr-3 sm:gap-2 sm:px-3.5 sm:text-xs"
            >
              {copied ? (
                <>
                  <span className="text-green-600">✓</span>
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <span>⧉</span>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* ================= CODE EDITOR ================= */}

          <div className="bg-white">

            {/* EDITOR TOP BAR */}

            <div className="flex h-[42px] items-center border-b border-[#e5e5e5] bg-[#fafafa] px-3 sm:h-[46px] sm:px-4">

              {/* Window dots */}

              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
              </div>

              {/* File name */}

              <div className="mx-auto max-w-[50%] -translate-x-4 overflow-hidden rounded-md bg-[#eeeeee] px-2.5 py-1 sm:-translate-x-8 sm:px-3">
                <span className="block truncate font-mono text-[10px] font-medium text-[#666] sm:text-[11px]">
                  {currentFile.name}
                </span>
              </div>
            </div>

            {/* CODE */}

            <div className="max-h-[400px] overflow-auto sm:max-h-[500px]">
              <SyntaxHighlighter
                language="jsx"
                style={oneLight}
                showLineNumbers
                wrapLongLines={false}
                customStyle={{
                  margin: 0,
                  padding: "20px 0",
                  background: "#ffffff",
                  fontSize: "11px",
                  lineHeight: "1.75",
                  minWidth: "max-content",
                }}
                codeTagProps={{
                  style: {
                    fontFamily:
                      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                  },
                }}
                lineNumberStyle={{
                  color: "#a0a0a0",
                  minWidth: "38px",
                  paddingRight: "12px",
                  paddingLeft: "10px",
                  textAlign: "right",
                  userSelect: "none",
                  borderRight: "1px solid #eeeeee",
                  marginRight: "12px",
                }}
              >
                {currentFile.code}
              </SyntaxHighlighter>
            </div>
          </div>
        </section>

        {/* ================= EXPLORE BUTTON ================= */}

        <div className="mt-6 flex justify-center sm:mt-8">
          <Link
            to={currentAnimation.route}
            className="group inline-flex items-center gap-2 rounded-xl border border-[#d7d7d7] bg-white px-5 py-3 text-xs font-semibold text-[#111] no-underline shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#111] hover:bg-[#111] hover:text-white hover:shadow-lg sm:gap-3 sm:px-6 sm:py-3.5 sm:text-sm"
          >
            <span>Explore Animation</span>

            <span className="text-base transition-transform duration-300 group-hover:translate-x-1 sm:text-lg">
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CodeUiReusable;