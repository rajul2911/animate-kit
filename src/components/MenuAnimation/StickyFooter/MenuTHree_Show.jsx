import React from "react";
import AnimaResusable from "../../../utils/AnimaResusable";

const MenuTHree_Show = () => {
  return (
    <div>
      <AnimaResusable
        breadcrumbs="Menu Animations / Sticky Footer"
        title="Sticky Footer"
        badge="Menu animation"
        description="A smooth footer animation that stays fixed or reveals itself as you scroll for a seamless transition."
        // videoLink="https://videos.animate-kit.store/Menu/Menu_Two.mp4"
          code={Three}
        //   githubUrl="https://github.com/rajul2911/animate-kit/tree/main/src/components/MenuAnimation/MenuTwo"
        viewAnimationRoute="sticky-footer-live"
      />
    </div>
  );
};

export default MenuTHree_Show;

const Three = [
  {
    id: "menu-three",
    name: "Sticky Footer",
    files: [
      {
        name: "StickyFooter.jsx",
        code: `import React from "react";
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
`,
      },
      {
        name: "Content.jsx",
        code: `import React from "react";
                
                const Content = () => {
                  return (
                    <div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between">
                      <Section1 />
                      <Section2 />
                    </div>
                  );
                };
                
                export default Content;
                
                const Section1 = () => {
                  return (
                    <div>
                      <Nav />
                    </div>
                  );
                };
                
                const Section2 = () => {
                  return (
                    <div className="flex justify-between items-end">
                      <h1 className="text-[14vw] leading-[0.8] mt-10">Sticky Footer</h1>
                      <p>©copyright</p>
                    </div>
                  );
                };
                
                const Nav = () => {
                  return (
                    <div className="flex shrink-0 gap-20">
                      <div className="flex flex-col gap-2">
                        <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
                        <p>Home</p>
                        <p>Projects</p>
                        <p>Our Mission</p>
                        <p>Contact Us</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>
                        <p>News</p>
                        <p>Learn</p>
                        <p>Certification</p>
                        <p>Publications</p>
                      </div>
                    </div>
                  );
                };
                `,
      },
    ],
  },
];
