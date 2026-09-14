import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuAnimation from '../pages/MenuAnimation'
import MenuOne from '../components/MenuAnimation/MenuOne/MenuOne'
import { menucode } from '../files&codes/MenuAnimationCodeShow'
import CodeUiReusable from '../utils/CodeUiReusable'

const MenuAnimationRoutes = () => {
  return (
   <>
    <CodeUiReusable
      animations={menucode}
      eyebrow="Menu Animation"
      title="Menu Animation"
      description="Explore different menu animations and their source code."
       backRoute="/"
    />
   
   </>
  )
}

export default MenuAnimationRoutes