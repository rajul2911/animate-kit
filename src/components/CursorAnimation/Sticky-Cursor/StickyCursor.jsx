import React, { forwardRef, useRef } from "react";
import CursorMove from "./CursorMove";
import MagnetCursor from "./MagnetCursor";

const StickyCursor = () => {
  const stickyelement = useRef(null);

  return (
    <>
      <div className="">
        <Header ref={stickyelement} />

        <CursorMove stickyElement={stickyelement} />
      </div>
    </>
  );
};

export default StickyCursor;
const Header = forwardRef((props, ref) => {
  return (
    <div className="fixed z-[1] flex w-full justify-end box-border p-[10px] cursor-pointer mix-blend-difference">
      <MagnetCursor>
        <div className="relative flex flex-col gap-2 p-[30px] pointer-events-none before:block before:content-[''] before:w-[30px] before:h-[2px] before:mix-blend-difference before:bg-red-700 after:block after:content-[''] after:w-[30px] after:h-[2px] after:mix-blend-difference after:bg-red-700">
          <div
            ref={ref}
            className="absolute top-0 left-0 h-full w-full pointer-events-auto hover:scale-[3]"
          />
        </div>
      </MagnetCursor>
    </div>
  );
});