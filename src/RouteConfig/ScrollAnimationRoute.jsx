import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollAnimation from '../pages/ScrollAnimation'
import ScrollOne from '../components/ScrollAnimationAll/Parallax Scroll/ScrollOne'
import ScrollCard from '../components/ScrollAnimationAll/CardScrollParallax/ScrollCard'
import ZoomParallax from '../components/ScrollAnimationAll/ZoomParallax/ZoomParallax'

const ScrollAnimationRoute = () => {
  return (
    <>
    <Routes>

        <Route index element={<ScrollAnimation/>}/>

        <Route path='scroll-animation-one' element={<ScrollOne/>}/>

        <Route path='scroll-animation-two' element={<ScrollCard/>}/>
        <Route path='scroll-animation-three' element={<ZoomParallax/>}/>

        



      


       


    </Routes>
    
    </>
  )
}

export default ScrollAnimationRoute