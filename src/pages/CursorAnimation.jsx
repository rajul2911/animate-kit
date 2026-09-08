import React from 'react'
import { Link } from 'react-router-dom'
import { cursoreffect } from '../files&codes/CursorEffectCodeShow'
import CodeUiReusable from '../utils/CodeUiReusable'

const CursorAnimation = () => {
  return (
    <CodeUiReusable
      animations={cursoreffect}
      eyebrow="Cursor Effect"
      title="Cursor Animation"
      description="Explore different Cursor Effect and  animations with their source code."
       backRoute="/"
    />
  )
}

export default CursorAnimation