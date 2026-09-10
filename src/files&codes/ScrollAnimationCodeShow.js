export const SWcrollAnimations = [
  {
    id: "scroll-one",
    name: "Parallax Scroll Animation",
    route: "scroll-animation-one",
    files: [
      {
        name: "ScrollOne.jsx",
        code: `const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const Column = ({ images, y, top }) => {
  return (
    <motion.div
      style={{
        y,
        top,
      }}
      className="relative flex flex-col lg:gap-10 gap-3 lg:p-3 p-1 overflow-hidden w-1/4"
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={\`Parallax item \${index + 1}\`}
          className="h-full w-full rounded-[10px] object-cover"
        />
      ))}
    </motion.div>
  );
};

const ScrollOne = () => {
  const container = useRef(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
    });

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

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <main className="">
      <div className="h-screen flex items-center justify-center lg:text-[140px] md:text-[100px] sm:text-[80px] text-[60px]">
        Scroll Down
      </div>

      <section
        ref={container}
        className="flex box-border gap-2 p-2 bg-[rgb(45,45,45)] overflow-hidden h-[150vh]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y1} top="-60%" />

        <Column images={[images[3], images[4], images[5]]} y={y2} top="-110%" />

        <Column images={[images[6], images[7], images[8]]} y={y3} top="-40%" />

        <Column
          images={[images[9], images[10], images[11]]}
          y={y4}
          top="-100%"
        />
      </section>

      <div className="h-screen flex items-center justify-center lg:text-[140px] md:text-[100px] sm:text-[80px] text-[60px]">
        Scroll Up
      </div>
    </main>
  );
};

export default ScrollOne;
`,
      },
    ],
  },
  {
    id: "scroll-two",
    name: "Card Parallax Animation",
    route: "scroll-animation-two",
    files: [
      {
        name: "ScrollCard.jsx",
        code: `const ScrollCard = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={container} className="relative mt-[50vh]">
      {projects?.map((item, index) => {
        const targetScale = 1 - (projects.length - index) * 0.05;

        // If you want to invisible the card after scrolling 
        //  const targetScale = (index * 0.05)-1 >0 ?  (index * 0.05)-1 :0

        return (
          <CardParallax
            key={index}
            i={index}
            item={item}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default ScrollCard;
`,
      },
      {
        name: "CardParallax.jsx",
        code: `const CardParallax = ({ item, key, i, progress, range, targetScale }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const imagescale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          backgroundColor: item?.color,
          top: \`calc(-10% + \${i * 25}px )\`,
        }}
        className="relative flex flex-col h-[500px] w-[1000px] rounded-[25px] p-[50px] origin-top"
      >
        <h2 className="text-center m-0 text-[28px]">{item?.title}</h2>

        <div className="flex flex-1 min-h-0 mt-[50px] gap-[50px]">
          <div className="w-[40%] relative top-[10%]">
            <p className="text-[16px] first-letter:text-[28px]">
              {item?.description}
            </p>

            <span className="flex items-center gap-[5px]">
              <a
                href={item?.link}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] underline cursor-pointer"
              >
                See more
              </a>

              <MdArrowForward size={22} />
            </span>
          </div>

          <div className="relative w-[60%] h-full rounded-[25px] overflow-hidden">
            <motion.div style={{ imagescale }} className="w-full h-full">
              <img
                src={item?.src}
                alt={item?.title || "image"}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardParallax;
`,
      },
      {
        name: "data.js",
        code: `export const projects = [
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: rock,
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: tree,
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: water,
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: house,
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#B62429",
  },
  {
    title: "Mark Rammers",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
    src: cactus,
    link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
    color: "#88A28D",
  },
];
`,
      },
    ],
  },
];