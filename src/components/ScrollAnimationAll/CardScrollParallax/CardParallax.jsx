import React from 'react'

const CardParallax = ({item,key}) => {
    console.log("item",item)
  return (
    <div className=''>

        <div style={{backgroundColor:item?.color}} className='h-screen flex items-center justify-center sticky top-0'>


        </div>
    </div>
  )
}

export default CardParallax