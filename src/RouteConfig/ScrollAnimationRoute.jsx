import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollAnimation from '../pages/ScrollAnimation'
import ScrollOne from '../components/ScrollAnimationAll/Parallax Scroll/ScrollOne'

const ScrollAnimationRoute = () => {
  return (
    <>
    <Routes>

        <Route index element={<ScrollAnimation/>}/>

        <Route path='scroll-animation-one' element={<ScrollOne/>}>

        </Route>


       


    </Routes>
    
    </>
  )
}

export default ScrollAnimationRoute