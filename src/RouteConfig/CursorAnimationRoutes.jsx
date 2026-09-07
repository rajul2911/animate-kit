import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CursorAnimation from '../pages/CursorAnimation'
import CursorOne from '../components/CursorAnimation/Mask-Cursor/CursorOne'

const CursorAnimationRoutes = () => {
  return (
    <>
    <Routes>
        <Route index  element={<CursorAnimation/>}/>
       
        <Route path='/cursor-one' element={<CursorOne/>}/>

    </Routes>
    
    </>
  )
}

export default CursorAnimationRoutes