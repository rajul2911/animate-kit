import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuAnimation from '../pages/CardsMainANimation/MenuAnimation'
import MenuOne from '../components/MenuAnimation/MenuOne/MenuOne'

const MenuAnimationRoutes = () => {
  return (
   <>
   <Routes>
    <Route index element={<MenuAnimation/>}/>
    <Route path="menu-one" element={<MenuOne/>}/>


   </Routes>
   
   </>
  )
}

export default MenuAnimationRoutes