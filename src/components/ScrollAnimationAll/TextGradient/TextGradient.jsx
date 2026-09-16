import { useScroll, useTransform,motion  } from 'motion/react';
import React, { useRef } from 'react'


const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
`;
const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"

const TextGradient = () => {

    const container = useRef(null);

    const {scrollYProgress} = useScroll({
        target:container,
        offset:['start 0.9', 'start 0.25']
    })

    const element = useRef(null);

    const {scrollYProgressBar} = useScroll({
        target:element,
        offset:['start 0.9', 'start 0.25']
    })

    const words = paragraph.split(" ");


  return (

    <div className='bg-[rgb(24,24,24)] flex flex-col'>
        <div className="h-[100vh] "></div>

        {/* <motion.p style={{opacity:scrollYProgress}} ref={container} className=' text-[50px] max-w-full p-[40px] font-["Playfair_Display"] italic font-black text-white'>{paragraph}</motion.p> */}

        <p className=' text-[50px] max-w-full p-[40px] font-["Playfair_Display"] italic font-black text-white flex flex-wrap leading-1'>
            
            {words.map((word,index)=>(
                <span key={index} className='mr-[12px] mt-[12px]'>{word}</span>

            ))}

        </p>

        <div className='h-[100vh] '></div>

    </div>
  )
}

export default TextGradient