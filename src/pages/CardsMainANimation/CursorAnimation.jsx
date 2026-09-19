import React from 'react'
import { Link } from 'react-router-dom'
import CodeUiReusable from '../../utils/CodeUiReusable'
import { cursoreffect } from '../../files&codes/CursorEffectCodeShow'
import AnimaResusable from '../../utils/AnimaResusable'

const CursorAnimation = () => {
  return (
    // <CodeUiReusable
    //   animations={cursoreffect}
    //   eyebrow="Cursor Effect"
    //   title="Cursor Animation"
    //   description="Explore different Cursor Effect and  animations with their source code."
    //    backRoute="/"
    // />

    <AnimaResusable
      breadcrumbs="Page Animations / One"
      title="Page Animation"
      badge="UI animation"
      description="A smooth animated navigation menu with expressive transitions."
      mainHead="Navigate with motion."
      previewDescription="Smooth transitions. Better experiences."
      videoLink="YOUR_CLOUDFLARE_R2_VIDEO_URL"
      code={cursoreffect}
      githubUrl="https://github.com/rajul2911/"
      viewAnimationRoute="/ui-animations/menu-one"
    />
  )
}

export default CursorAnimation