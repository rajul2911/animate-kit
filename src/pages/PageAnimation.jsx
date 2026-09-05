import React from "react";
import { animations } from "../files&codes/PageAnimationCodeShow";
import CodeUiReusable from "../utils/CodeUiReusable";

const PageAnimation = () => {
  return (
     <CodeUiReusable
      animations={animations}
      eyebrow="Page Transitions"
      title="Page Animation"
      description="Explore different page transition animations and their source code."
    />
  )
}

export default PageAnimation

