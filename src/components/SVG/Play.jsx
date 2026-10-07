import React from "react";
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
export const shape2_morphed = "m65.52,39.56l67.58,49.44-67.58,49.44V39.56Z";