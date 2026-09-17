import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CursorOne from '../components/CursorAnimation/Mask-Cursor/CursorOne'
import CursorAnimation from '../pages/CardsMainANimation/CursorAnimation'

const CursorAnimationRoutes = () => {
  return (
    <>
    <Routes>
        <Route index  element={<CursorAnimation/>}/>
       
        <Route path='cursor-one' element={<CursorOne/>}/>

    </Routes>
    
    </>
  )
}

export default CursorAnimationRoutes