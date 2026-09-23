import React, { useState } from 'react'
import Button from './Button'
import { motion } from 'motion/react'

const SideBarMenu = () => {

    const variants = {
        open:{
            width:480,
            height:650,
            top:"-25px",
            right:"-25px",
            transition:{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }
        },
        close:{
            height:40,
            width:100,
            top: "0px",
            right:"0px",
            transition:{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        } 
        }
    }

    const [isActive , setIsActive] = useState(false)
  return (
    <div className='fixed right-[50px] top-[50px]'>

        <motion.div variants={variants} animate={isActive ?"open" : "close"} initial="close" className='relative w-[480px] h-[650px] bg-[#c9fd74] rounded-[25px]'>

        </motion.div>

        <Button isActive={isActive} setIsActive={setIsActive}/>


    </div>
  )
}

export default SideBarMenu