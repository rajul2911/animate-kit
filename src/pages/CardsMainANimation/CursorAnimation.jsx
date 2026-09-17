import React from 'react'
import { Link } from 'react-router-dom'
import CodeUiReusable from '../../utils/CodeUiReusable'
import { cursoreffect } from '../../files&codes/CursorEffectCodeShow'

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