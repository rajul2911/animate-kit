import React from 'react'
import Smile from './Smile'
import Play from './Play'

const MorphSvg = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] bg-[rgb(31,31,31)] gap-[200px]'>

        <div className='flex items-center justify-center gap-200'>
            <Smile/>
            <Play/>

        </div>


    </div>
  )
}

export default MorphSvg