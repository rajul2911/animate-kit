import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiCopy,
  FiExternalLink,
  FiGithub,
  FiPlay,
} from "react-icons/fi";

const getLanguage = (fileName = "") => {
  const extension = fileName.split(".").pop()?.toLowerCase();

  const languages = {
    jsx: "jsx",
    tsx: "tsx",
    js: "javascript",
    ts: "typescript",
    css: "css",
    scss: "scss",
    html: "html",
    json: "json",
  };

  return languages[extension] || "jsx";
};

const AnimaResusable = ({
  breadcrumbs = "",
  title = "",
  badge = "Animation",
  description = "",
  videoLink = "",
  code = [],
  githubUrl = "",
  viewAnimationRoute = "",
}) => {
  const [activeFile, setActiveFile] = useState(0);
  const [copied, setCopied] = useState(false);
  const [videoError, setVideoError] = useState(false);

  /*
    Data structure:

    code = [
      {
        id: "...",
        name: "...",
        route: "...",
        files: [...]
      }
    ]
  */

  const currentAnimation = Array.isArray(code) ? code[0] : code;

  const files = Array.isArray(currentAnimation?.files)
    ? currentAnimation.files
    : [];

  const currentFile = files[activeFile];

  const currentCode =
    typeof currentFile?.code === "string" ? currentFile.code : "";

  /*
    Check whether a valid video URL was supplied.
  */

  const hasVideoUrl =
    typeof videoLink === "string" &&
    videoLink.trim() !== "" &&
    !videoLink.includes("YOUR_CLOUDFLARE_R2_VIDEO_URL");

  const showVideo = hasVideoUrl && !videoError;

  /*
    Reset state whenever animation/video changes.
  */

  useEffect(() => {
    setActiveFile(0);
    setCopied(false);
    setVideoError(false);
  }, [code, videoLink]);

  const handleFileChange = (index) => {
    setActiveFile(index);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!currentCode) return;

    try {
      await navigator.clipboard.writeText(currentCode);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#fffdfa] pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:pt-12">
      <div className="mx-auto w-full max-w-[1480px]">
        {breadcrumbs && (
          <div className="mb-7 text-[11px] font-medium text-muted-foreground sm:mb-8 sm:text-xs">
            {breadcrumbs}
          </div>
        )}

        <header className="mb-7 flex flex-col gap-6 border-b border-[#d9e2e3] pb-7 sm:mb-8 sm:pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[760px]">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <h1 className="m-0 text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h1>

              {badge && (
                <span className="rounded-full bg-secondary px-3 py-1.5 text-[10px] font-bold text-primary sm:text-[11px]">
                  {badge}
                </span>
              )}
            </div>

            {description && (
              <p className="m-0 max-w-[680px] text-sm leading-6 text-foreground sm:text-base">
                {description}
              </p>
            )}
          </div>

          <div className="hidden max-w-[230px] border-l-2 border-destructive pl-4 lg:block">
            <span className="mb-2 block text-2xl leading-none text-destructive">
              “
            </span>

            <p className="m-0 text-sm font-bold leading-5 text-ink-soft">
              Smooth animations create seamless experiences.
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          <div className="h-full self-start overflow-hidden rounded-2xl border border-[#d9e3e5] bg-white shadow-[0_8px_30px_rgba(15,50,60,0.05)]">
            <div className="flex h-[54px] items-center border-b border-[#e4ebec] px-4 sm:px-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-primary">
                  <FiPlay className="text-sm" />
                </div>

                <span className="text-sm font-bold text-ink-soft">
                  Preview
                </span>
              </div>
            </div>

            <div className="relative w-full h-full overflow-hidden bg-[#edf5f4]">
              {showVideo ? (
                <video
                  id="animation-preview-video"
                  src={videoLink}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onError={() => setVideoError(true)}
                  className="block h-full w-full object-contain"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                    <FiPlay className="ml-0.5 text-lg" />
                  </div>

                  <h3 className="m-0 text-sm font-bold text-foreground sm:text-base">
                    Preview unavailable
                  </h3>

                  <p className="mx-auto mt-2 max-w-[360px] text-[11px] leading-5 text-muted-foreground sm:text-xs">
                    The preview video isn't available right now. View the live
                    animation to experience the effect directly.
                  </p>

                  {viewAnimationRoute && (
                    <Link
                      to={`/${viewAnimationRoute}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-2 rounded-lg bg-ink-soft px-4 py-2.5 text-[11px] font-bold text-white no-underline shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-md sm:w-auto sm:text-sm hover:text-foreground"
                      // group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#073445] px-6 py-3 text-xs font-bold text-white no-underline shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-md sm:w-auto sm:text-sm hover:text-foreground
                    >
                      View live animation
                      <FiArrowRight />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#d9e3e5] bg-white shadow-[0_8px_30px_rgba(15,50,60,0.05)]">
            <div className="flex h-[54px] items-center justify-between border-b border-[#e4ebec] px-4 sm:px-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffe0da] text-destructive">
                  <FiCode className="text-sm" />
                </div>

                <span className="text-sm font-bold text-[#092f40]">Code</span>
              </div>

              {currentCode && (
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#d8e0e2] bg-white px-3 py-2 text-[11px] font-semibold text-muted-foreground shadow-sm transition-all duration-200 hover:border-[#bbb] active:scale-95 sm:text-xs"
                >
                  {copied ? (
                    <>
                      <FiCheck className="text-primary" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <FiCopy />
                      <span>Copy code</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {files.length > 0 && (
              <div className="flex overflow-x-auto border-b border-[#dce7e9] bg-[#eef7f8] px-3 pt-2 sm:px-4">
                {files.map((file, index) => {
                  const isActive = activeFile === index;

                  return (
                    <button
                      key={file?.name || index}
                      type="button"
                      onClick={() => handleFileChange(index)}
                      className={`relative shrink-0 cursor-pointer border-0 px-3 py-2.5 text-[10px] font-semibold transition-all duration-200 sm:px-4 sm:text-[11px] ${
                        isActive
                          ? "rounded-t-lg bg-white text-primary"
                          : "bg-transparent text-secondary-foreground hover:text-ink-soft"
                      }`}
                    >
                      {file?.name || `File ${index + 1}`}

                      {isActive && (
                        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="relative bg-[#082b38]">
              {currentCode ? (
                <div className="h-[320px] overflow-auto sm:h-[380px] lg:h-[430px]">
                  <SyntaxHighlighter
                    language={getLanguage(currentFile?.name)}
                    style={oneDark}
                    showLineNumbers
                    wrapLongLines={false}
                    customStyle={{
                      margin: 0,
                      minWidth: "max-content",
                      minHeight: "100%",
                      padding: "20px 0",
                      background: "#082b38",
                      fontSize: "11px",
                      lineHeight: "1.7",
                    }}
                    codeTagProps={{
                      style: {
                        fontFamily:
                          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                      },
                    }}
                    lineNumberStyle={{
                      color: "#63818a",
                      minWidth: "42px",
                      paddingRight: "12px",
                      paddingLeft: "10px",
                      textAlign: "right",
                      userSelect: "none",
                      borderRight: "1px solid #173f4c",
                      marginRight: "12px",
                    }}
                  >
                    {currentCode}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <div className="flex h-[320px] items-center justify-center text-sm text-[#8ba6ad] sm:h-[380px] lg:h-[430px]">
                  Code unavailable
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#cfdcde] bg-[#181717] px-6 py-3 text-xs font-bold text-white no-underline shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#173845] hover:shadow-md sm:w-auto sm:text-sm hover:bg-white hover:text-foreground"
            >
              <FiGithub className="text-base" />

              <span>Source Code</span>

              <FiExternalLink className="text-xs opacity-60 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          )}

          {viewAnimationRoute && (
            <Link
              to={`/${viewAnimationRoute}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#073445] px-6 py-3 text-xs font-bold text-white no-underline shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-md sm:w-auto sm:text-sm hover:text-foreground"
            >
              <FiPlay className="text-base" />

              <span>View Animation</span>

              <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default AnimaResusable;
