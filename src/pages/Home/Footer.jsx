import React from "react";
import img from "../../assests/Home/belowimg.png";

const Footer = () => {
  return (
    <section className="w-full px-4 py-5 sm:px-6 md:px-10 lg:px-14">

      <div
        className="relative min-h-[360px] w-full overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat sm:min-h-[340px] sm:rounded-2xl lg:min-h-[300px]"
        style={{ backgroundImage: `url(${img})` }}
      >

        <div className="relative z-10 flex min-h-[360px] items-center px-6 py-10 sm:min-h-[340px] sm:px-8 sm:py-12 md:px-10 lg:min-h-[300px] lg:px-14 lg:py-10">

          <div className="w-full max-w-[650px]">

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[1.3px] text-primary sm:text-[11px] sm:tracking-[1.5px]">
              Build a more animated web
            </p>

            <h2 className="max-w-[650px] text-[30px] font-bold leading-[1.12] tracking-[-0.8px] text-foreground sm:text-[36px] sm:leading-[1.1] sm:tracking-[-1px] md:text-[40px] lg:text-[42px]">
              MotionLab is for creators,
              <br className="hidden sm:block" />
              developers, and dreamers.
            </h2>

            <p className="mt-4 max-w-[600px] text-[13px] leading-[1.6] text-muted-foreground sm:mt-5 sm:text-[14px] md:text-[15px]">
              Whether you're building a portfolio, product, or playful
              experiment, find the inspiration and code to make it move.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer