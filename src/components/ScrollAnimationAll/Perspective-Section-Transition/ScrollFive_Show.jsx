import React from "react";
import AnimaResusable from "../../../utils/AnimaResusable";

const ScrollFive_Show = () => {
  return (
    <div>
      <AnimaResusable
        breadcrumbs="Scroll Animation / Perspective Scroll"
        title="Perspective Scroll Transition"
        badge="Scroll animation"
        description="A smooth 3D-style scroll effect that adds depth and perspective to page elements"
        videoLink="YOUR_CLOUDFLARE_R2_VIDEO_URL"
          code={Five}
        githubUrl="https://github.com/rajul2911/animate-kit/tree/main/src/components/ScrollAnimationAll/TextGradient"
        viewAnimationRoute="perspective-scroll-live"
      />
    </div>
  );
};

export default ScrollFive_Show;

const Five = [
  {
    id: "scroll-five",
    name: "Perspective-scroll",
    route: "perspective-scroll-live",
    files: [
      {
        name: "PerspectiveScroll.jsx",
        code: `const PerspectiveScroll = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);
  return (
    <div ref={container} className="relative h-[200vh] bg-neutral-900">
      <Section1 scrollYProgress={scrollYProgress}></Section1>
      <Section2 scrollYProgress={scrollYProgress}></Section2>
    </div>
  );
};

export default PerspectiveScroll;

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <img src={img1} alt="" className="w-full h-full object-cover" />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  return (
    <motion.div style={{ scale, rotate }} className="h-screen relative">
      <img src={img2} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );
};

`,
      },
    ],
  },
];
