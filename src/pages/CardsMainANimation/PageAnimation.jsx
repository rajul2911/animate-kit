import React from "react";
import CodeUiReusable from "../../utils/CodeUiReusable";
import { animations } from "../../files&codes/PageAnimationCodeShow";

const PageAnimation = () => {
  return (
     <CodeUiReusable
      animations={animations}
      eyebrow="Page Transitions"
      title="Page Animation"
      description="Explore different page transition animations and their source code."
       backRoute="/"
    />
  )
}

export default PageAnimation