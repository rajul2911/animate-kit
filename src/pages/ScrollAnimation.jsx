import React from 'react'
import { Link } from 'react-router-dom'
import { SWcrollAnimations } from '../files&codes/ScrollAnimationCodeShow'
import CodeUiReusable from '../utils/CodeUiReusable'

const ScrollAnimation = () => {
  return (
    <>

     <CodeUiReusable
      animations={SWcrollAnimations}
      eyebrow="Scroll Transition"
      title="Scroll Animation"
      description="Explore different scroll animations and their source code."
       backRoute="/"
    />

    
    </>
  )
}

export default ScrollAnimation