import React from "react";
import { Link } from "react-router-dom";
import CodeUiReusable from "../../utils/CodeUiReusable";
import { menucode } from "../../files&codes/MenuAnimationCodeShow";

const MenuAnimation = () => {
  return (
    <>
       <CodeUiReusable
      animations={menucode}
      eyebrow="Menu Animation"
      title="Menu Animation"
      description="Explore different menu animations and their source code."
       backRoute="/"
    />
    </>
  );
};

export default MenuAnimation;
