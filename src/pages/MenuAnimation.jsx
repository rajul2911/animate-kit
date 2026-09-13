import React from "react";
import { Link } from "react-router-dom";
import CodeUiReusable from "../utils/CodeUiReusable";
import { menucode } from "../files&codes/MenuAnimationCodeShow";

const MenuAnimation = () => {
  return (
    <>
       <CodeUiReusable
      animations={menucode}
      eyebrow="Menu Transitions"
      title="Menu Animation"
      description="Explore different Menu transition animations and their source code."
       backRoute="/"
    />
    </>
  );
};

export default MenuAnimation;
