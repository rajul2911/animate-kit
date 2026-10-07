import React from "react";
import AnimaResusable from "../../utils/AnimaResusable";

const SVGOne_Show = () => {
  return (
    <div>
      <AnimaResusable
        breadcrumbs="SVG Animations / Morph SVG"
        title="Morph SVG"
        badge="SVG animation"
        description="A smooth animation that transforms one SVG shape into another using fluid path interpolation."
        // videoLink="https://videos.animate-kit.store/Menu/Menu_Two.mp4"
          code={One}
        //   githubUrl="https://github.com/rajul2911/animate-kit/tree/main/src/components/MenuAnimation/MenuTwo"
        viewAnimationRoute="morph-svg-live"
      />
    </div>
  );
};

export default SVGOne_Show;

const One = [
  {
    id: "svg-one",
    name: " Morph SVG",
    files: [
      {
        name: "MorphSvg.jsx",
        code: `import React from 'react'
import Smile from './Smile'
import Play from './Play'

const MorphSvg = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] bg-[rgb(31,31,31)] gap-[200px]'>

        <div className='flex items-center justify-center gap-200'>
            <Smile/>
            <Play/>
        </div>
    </div>
  )
}

export default MorphSvg`,
      },
      {
        name: "Smile.jsx",
        code: `import React from "react";
import Shape from "./Shape";

const Smile = () => {
  return (
    <div className="w-[20vw] h-[20vw] flex items-center justify-center">
      <svg className="w-[100%]" viewBox="0 0 192 192">
        <path d={head} fill="white" />
        <Shape paths={[smile, happy_smile, smile]} />
        <Shape paths={[eye_l, happy_eye_l, eye_l]} />
        <Shape paths={[eye_r, happy_eye_r, eye_r]} />
      </svg>
    </div>
  );
};

export default Smile;

export const head = "m96,0C42.98,0,0,42.98,0,96s42.98,96,96,96,96-42.98,96-96S149.02,0,96,0Zm0,181.71c-47.34,0-85.71-38.38-85.71-85.71S48.66,10.29,96,10.29s85.71,38.38,85.71,85.71-38.38,85.71-85.71,85.71Z";

export const happy_smile = "m96,152.43c-24.61,0-38.09-10.47-45.06-19.25-7.12-8.97-11.37-21.26-11.37-32.89h10c0,15.65,9.78,42.14,46.43,42.14,17.24,0,46.43-8.88,46.43-42.14h10c0,11.63-4.25,23.93-11.37,32.89-6.97,8.78-20.45,19.25-45.06,19.25Z";

export const happy_eye_l = "m80.43,72h-10c0-2.91-2.37-5.29-5.29-5.29s-5.29,2.37-5.29,5.29h-10c0-8.43,6.86-15.29,15.29-15.29s15.29,6.86,15.29,15.29Z";

export const happy_eye_r = "m142.14,72h-10c0-2.91-2.37-5.29-5.29-5.29s-5.29,2.37-5.29,5.29h-10c0-8.43,6.86-15.29,15.29-15.29s15.29,6.86,15.29,15.29Z";

export const smile = "m96,151.43c-31.08,0-55.43-14.93-55.43-34h8c0,14.09,21.72,26,47.43,26s47.43-11.91,47.43-26h8c0,19.07-24.35,34-55.43,34Z";

export const eye_l = "m75.43,85.71c0,5.68-4.61,10.29-10.29,10.29s-10.29-4.61-10.29-10.29,4.61-10.29,10.29-10.29,10.29,4.61,10.29,10.29Z";

export const eye_r = "m137.14,85.71c0,5.68-4.61,10.29-10.29,10.29s-10.29-4.61-10.29-10.29,4.61-10.29,10.29-10.29,10.29,4.61,10.29,10.29Z"
`,
      },
      {
        name: "Play.jsx",
        code: `import React from "react";
import Shape from "./Shape";

const Play = () => {
  return (
    <div>
      <div className="w-[15vw] h-[15vh] flex items-center justify-center">
        <svg
          className="w-[100%]"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144 178"
        >
          <Shape paths={[shape1, shape1_morphed, shape1]} />
          <Shape paths={[shape2, shape2_morphed, shape2]} />
        </svg>
      </div>
    </div>
  );
};

export default Play;



export const shape1 = "m0,0h53v178H0V0Z";
export const shape2 = "m91,0h53v178h-53V0Z";
export const shape1_morphed = "m70.45,134.74l-57.68,43.26V0l56.48,42.36,1.19,92.38Z";
export const shape2_morphed = "m65.52,39.56l67.58,49.44-67.58,49.44V39.56Z";`,
      },
      {
        name: "Shape.jsx",
        code: `import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { animate } from "motion";
import { interpolate } from "flubber";

const Shape = ({paths}) => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);

  const arrayOfIndex = paths.map((_, i) => i);
  const path = useTransform(progress, arrayOfIndex, paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 }),
  });

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.4,
      ease: "easeInOut",
      delay: 0.5,
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });
    return () => {
      animation.stop();
    };
  }, [pathIndex]);

  return <motion.path fill="white" d={path} />;
};

export default Shape;
`,
      },
    ],
  },
];
