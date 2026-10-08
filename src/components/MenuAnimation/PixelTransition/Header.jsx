import React from "react";

const Header = ({ menuIsActive, setMenuIsActive }) => {
  return (
    <div className="fixed top-0 z-[4] box-border flex w-full justify-end p-[40px]">
      <div
        onClick={() => setMenuIsActive(!menuIsActive)}
        className="relative flex cursor-pointer flex-col"
      >
        <span
          className={`relative block h-[2px] w-[30px] bg-black transition-transform duration-300 ${
            menuIsActive ? "top-0 rotate-[45deg]" : "top-[5px]"
          }`}
        />

        <span
          className={`relative block h-[2px] w-[30px] bg-black transition-transform duration-300 ${
            menuIsActive ? "top-0 rotate-[-45deg]" : "top-[-5px]"
          }`}
        />
      </div>
    </div>
  );
};

export default Header;
