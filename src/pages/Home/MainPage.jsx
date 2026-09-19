
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import bgimage from "../../assests/Home/HomeBg.png";
import Category from "./Category";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <div className="w-full overflow-x-hidden scrollbar-hide">

      {/* Hero Section */}
      <section className="relative flex min-h-[560px] w-full overflow-hidden border-b border-[#dbe7e7] bg-[#fffdfa] sm:min-h-[600px] lg:min-h-[680px]">

        {/* Full Width Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70 sm:opacity-80 lg:opacity-100"
          style={{
            backgroundImage: `url(${bgimage})`,
          }}
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 z-[1] bg-[#fffdfa]/35" />

        {/* Hero Content */}
        <div className="relative z-10 flex w-full flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-14 lg:py-16">

          {/* Eyebrow */}
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.5px] text-[#009e91] sm:mb-5 sm:text-[12px]">
            Welcome to AnimateKit
          </p>

          {/* Heading */}
          <h1 className="max-w-[650px] text-[48px] font-bold leading-[0.98] tracking-[-2px] text-[#082532] sm:text-[58px] sm:tracking-[-2.5px] md:text-[64px] lg:text-[72px] lg:tracking-[-3px]">
            Turn ideas
            <br />
            into <span className="text-[#00a99d]">motion.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.55] text-[#527083] sm:mt-7 sm:text-[17px] md:text-[18px]">
            A growing collection of modern web animations with ready-to-use
            code, live previews, and real examples.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center">

            <button className="flex w-full items-center justify-center gap-3 rounded-md bg-[#009f92] px-6 py-3 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#008f83] sm:w-auto sm:px-7">
              Explore animations
              <FiArrowRight className="text-[17px]" />
            </button>

            <button className="w-full rounded-md border border-[#d5dfe2] bg-white px-6 py-3 text-[14px] font-medium text-[#173b4d] shadow-sm transition-all duration-200 hover:bg-[#f7faf9] sm:w-auto sm:px-7">
              Learn more
            </button>

          </div>

          {/* Stats */}
          <div className="mt-8 max-w-[620px] border-t border-[#d4e0e2] pt-5 sm:mt-9">

            <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-6 md:gap-8">

              {/* Animations */}
              <div>
                <h3 className="text-[19px] font-bold text-[#082532] sm:text-[20px]">
                  50+
                </h3>
                <p className="text-[11px] text-[#527083] sm:text-[12px]">
                  Animations
                </p>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-[19px] font-bold text-[#082532] sm:text-[20px]">
                  6
                </h3>
                <p className="text-[11px] text-[#527083] sm:text-[12px]">
                  Categories
                </p>
              </div>

              {/* Code */}
              <div>
                <h3 className="text-[19px] font-bold text-[#082532] sm:text-[20px]">
                  Clean
                </h3>
                <p className="text-[11px] text-[#527083] sm:text-[12px]">
                  Code examples
                </p>
              </div>

              {/* Frontend */}
              <div>
                <h3 className="text-[19px] font-bold text-[#082532] sm:text-[20px]">
                  100%
                </h3>
                <p className="text-[11px] text-[#527083] sm:text-[12px]">
                  Frontend focus
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Categories */}
      <Category />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default MainPage;
