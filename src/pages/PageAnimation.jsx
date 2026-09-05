import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animations } from "../files&codes/PageAnimationCodeShow";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

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

        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#888]">
            Page Transitions
          </p>

          <h1 className="m-0 text-5xl font-bold tracking-[-0.03em] text-[#111]">
            Page Animation
          </h1>

          <p className="mx-auto mt-4 max-w-[550px] text-base leading-relaxed text-[#777]">
            Explore different page transition animations and their source code.
          </p>
        </div>

        {/* ================= ANIMATION TABS ================= */}

        <div className="mx-auto mb-8 flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-xl border border-[#dedede] bg-[#e9e9e9] p-1.5">

          {animations.map((animation, index) => {
            const isActive = activeAnimation === index;

            return (
              <button
                key={animation.id}
                type="button"
                onClick={() => handleAnimationChange(index)}
                className={`shrink-0 cursor-pointer rounded-lg border-0 px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${isActive ? "bg-white text-[#111] shadow-[0_2px_10px_rgba(0,0,0,0.08)]" : "bg-transparent text-[#666] hover:bg-white/50 hover:text-[#111]"}`}
              >
                {animation.name}
              </button>
            );
          })}
        </div>

        {/* ================= CODE SECTION ================= */}

        <section className="overflow-hidden rounded-2xl border border-[#dcdcdc] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">

          {/* ================= FILE TABS HEADER ================= */}

          <div className="flex min-h-[58px] items-center justify-between border-b border-[#e5e5e5] bg-[#fafafa]">

            {/* FILE TABS */}

            <div className="flex h-[58px] items-stretch overflow-x-auto">

              {currentAnimation.files.map((file, index) => {
                const isActive = activeFile === index;

                return (
                  <button
                    key={file.name}
                    type="button"
                    onClick={() => handleFileChange(index)}
                    className={`relative shrink-0 cursor-pointer border-0 border-r border-[#e5e5e5] px-6 font-mono text-sm transition-all duration-200 ${isActive ? "bg-white font-semibold text-[#111]" : "bg-[#fafafa] text-[#777] hover:bg-[#f3f3f3] hover:text-[#222]"}`}
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
              className="mr-3 flex shrink-0 cursor-pointer items-center gap-2 rounded-lg border border-[#d8d8d8] bg-white px-3.5 py-2 text-xs font-semibold text-[#333] shadow-sm transition-all duration-200 hover:border-[#bbb] hover:bg-[#f5f5f5] active:scale-95"
            >
              {copied ? (
                <>
                  <span className="text-green-600">✓</span>
                  Copied
                </>
              ) : (
                <>
                  <span>⧉</span>
                  Copy
                </>
              )}
            </button>
          </div>

          {/* ================= CODE EDITOR ================= */}

          <div className="bg-white">

            {/* EDITOR TOP BAR */}

            <div className="flex h-[46px] items-center border-b border-[#e5e5e5] bg-[#fafafa] px-4">
              {/* Window dots */}

              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>

              {/* File name */}

              <div className="mx-auto -translate-x-8 rounded-md bg-[#eeeeee] px-3 py-1">
                <span className="font-mono text-[11px] font-medium text-[#666]">
                  {currentFile.name}
                </span>
              </div>
            </div>

            {/* CODE */}

            <div className="max-h-[500px] overflow-auto">
              <SyntaxHighlighter
                language="jsx"
                style={oneLight}
                showLineNumbers
                wrapLongLines={false}
                customStyle={{
                  margin: 0,
                  padding: "24px 0",
                  background: "#ffffff",
                  fontSize: "13px",
                  lineHeight: "1.75",
                  minWidth: "100%",
                }}
                codeTagProps={{
                  style: {
                    fontFamily:
                      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                  },
                }}
                lineNumberStyle={{
                  color: "#a0a0a0",
                  minWidth: "48px",
                  paddingRight: "18px",
                  paddingLeft: "18px",
                  textAlign: "right",
                  userSelect: "none",
                  borderRight: "1px solid #eeeeee",
                  marginRight: "18px",
                }}
              >
                {currentFile.code}
              </SyntaxHighlighter>
            </div>
          </div>
        </section>

        {/* ================= EXPLORE BUTTON ================= */}

        <div className="mt-8 flex justify-center">

          <Link
            to={currentAnimation.route}
            className="group inline-flex items-center gap-3 rounded-xl border border-[#d7d7d7] bg-white px-6 py-3.5 text-sm font-semibold text-[#111] no-underline shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#111] hover:bg-[#111] hover:text-white hover:shadow-lg"
          >
            <span>Explore Animation</span>

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>
      </div>
    </main>
  );
};

export default PageAnimation;