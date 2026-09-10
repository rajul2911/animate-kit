import { main } from 'motion/react-client'
import React, { useEffect, useRef } from 'react'
import { projects } from './data'
import CardParallax from './CardParallax'
import { useScroll } from 'motion/react'

const ScrollCard = () => {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target:container,
    offset:["start start" , "end end"],

  })
   useEffect(() => {
    console.log("Initial scrollYProgress:", scrollYProgress.get());

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      console.log("scrollYProgress:", latest);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);
  return (
    <main ref={container} className='relative mt-[50vh]'>
        {projects?.map((item,index)=>{
          const targetScale = 1-((projects.length - index) * 0.05)
            return (
              
                <CardParallax key={index} i={index} item={item} progress= {scrollYProgress} range={[index*0.25,1]} targetScale={targetScale}/>
            )
        })}
    </main>
  )
}

export default ScrollCard