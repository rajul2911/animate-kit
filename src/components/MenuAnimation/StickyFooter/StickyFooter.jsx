import React from "react";
import Content from "./Content";

const StickyFooter = () => {
  return (
    <div className="bg-black text-white">

      <div className="h-screen flex text-[2vw] items-center justify-center">
        <h2 className="max-w-[45%] text-center leading-none">
          This is an example of a sticky footer made with CSS.
        </h2>
      </div>


       <div 
        className='relative h-[800px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
            <div className='h-[800px] sticky top-[calc(100vh-800px)]'>
                <Content />
            </div>
        </div>
    </div>


    </div>
  );
};

export default StickyFooter;
