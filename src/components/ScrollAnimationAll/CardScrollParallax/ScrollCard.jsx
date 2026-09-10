import React, { useEffect, useRef } from 'react'
import { projects } from './data'
import CardParallax from './CardParallax'
import { useScroll } from 'motion/react'
import Lenis from 'lenis'

const ScrollCard = () => {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target:container,
    offset:["start start" , "end end"],

  })

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
    <main ref={container} className='relative mt-[50vh]'>
        {projects?.map((item,index)=>{
          const targetScale = 1-((projects.length - index) * 0.05)

          // If you want to invisible the card after scrolling 
          //  const targetScale = (index * 0.05)-1 >0 ?  (index * 0.05)-1 :0
            return (
              
                <CardParallax key={index} i={index} item={item} progress= {scrollYProgress} range={[index*0.25,1]} targetScale={targetScale}/>
            )
        })}
    </main>
  )
}

export default ScrollCard