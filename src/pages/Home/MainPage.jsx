import React from "react";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import bgimage from "../../assests/Home/HomeBg.png";
import Category from "./Category";
import Footer from "./Footer";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const MainPage = () => {
  return (
    <div className="w-full overflow-x-hidden scrollbar-hide">
      <section className="relative flex min-h-[560px] w-full overflow-hidden border-b border-[#dbe7e7] bg-[#fffdfa] sm:min-h-[600px] lg:min-h-[680px]">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70 sm:opacity-80 lg:opacity-100"
          style={{
            backgroundImage: `url(${bgimage})`,
          }}
        />

        <div className="absolute inset-0 z-[1] bg-[#fffdfa]/35" />

        <div className="relative z-10 flex w-full flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-14 lg:py-16">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.5px] text-primary sm:mb-5 sm:text-[12px]">
            Welcome to AnimateKit
          </p>

          {/* Heading */}
          <h1 className="max-w-[650px] text-[48px] font-bold leading-[0.98] tracking-[-2px] text-foreground sm:text-[58px] sm:tracking-[-2.5px] md:text-[64px] lg:text-[72px] lg:tracking-[-3px]">
            Turn ideas
            <br />
            into <span className="text-primary">motion.</span>
          </h1>

          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.55] text-muted-foreground sm:mt-7 sm:text-[17px] md:text-[18px]">
            A growing collection of modern web animations with ready-to-use
            code, live previews, and real examples.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="https://github.com/rajul2911/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-md border border-[#181717] bg-[#181717] px-1 py-2 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-white hover:text-black sm:w-auto sm:px-6 sm:text-[14px]"
            >
              <FiGithub className="shrink-0 text-[18px]" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rajulgupta2911/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-md border border-[#0A66C2] bg-[#0A66C2] px-1 py-2 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-white hover:text-black sm:w-auto sm:px-6 sm:text-[14px]"
            >
              <FaLinkedinIn className="shrink-0 text-[18px]" />
              LinkedIn
            </a>

            <a
              href="mailto:rajulgupta2911@gmail.com"
              className="flex w-full items-center justify-center gap-2.5 rounded-md border border-[#EA4335] bg-[#EA4335] px-1 py-2 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-white hover:text-black sm:w-auto sm:px-6 sm:text-[14px]"
            >
              <SiGmail className="shrink-0 text-[18px]" />
              Gmail
            </a>
          </div>

          <div className="mt-8 max-w-[620px] border-t border-[#d4e0e2] pt-5 sm:mt-9">
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-6 md:gap-8">
              <div>
                <h3 className="text-[19px] font-bold text-foreground sm:text-[20px]">
                  10
                </h3>
                <p className="text-[11px] text-muted-foreground sm:text-[12px]">
                  Animations
                </p>
              </div>

              <div>
                <h3 className="text-[19px] font-bold text-foreground sm:text-[20px]">
                  4
                </h3>
                <p className="text-[11px] text-muted-foreground sm:text-[12px]">
                  Categories
                </p>
              </div>

              <div>
                <h3 className="text-[19px] font-bold text-foreground sm:text-[20px]">
                  Clean
                </h3>
                <p className="text-[11px] text-muted-foreground sm:text-[12px]">
                  Code examples
                </p>
              </div>

              <div>
                <h3 className="text-[19px] font-bold text-foreground sm:text-[20px]">
                  100%
                </h3>
                <p className="text-[11px] text-muted-foreground sm:text-[12px]">
                  Frontend focus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Category />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
