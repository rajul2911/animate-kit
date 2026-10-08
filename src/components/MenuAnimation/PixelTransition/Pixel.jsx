import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Center from "./Position/Center";
import Horizontal from "./Position/Horizontal";
import Vertical from "./Position/Vertical";

const Pixel = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <div>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      <Menu menuIsActive={menuIsActive} />

      {/* THis is if you want animation from middle */}

      {/* <Center menuIsActive={menuIsActive}/> */}

      {/* THis is if you want the transition from left to right */}
      {/* <Horizontal menuIsActive={menuIsActive}/> */}

      {/* THis is if you want transition from top to bottom */}
      <Vertical menuIsActive={menuIsActive} />
    </div>
  );
};

export default Pixel;
