import { main } from 'motion/react-client'
import React from 'react'
import { projects } from './data'
import CardParallax from './CardParallax'

const ScrollCard = () => {
  return (
    <main className='relative mt-[50vh]'>
        {projects?.map((item,index)=>{
            return (
                <CardParallax key={index} item={item}/>
            )
        })}
    </main>
  )
}

export default ScrollCard