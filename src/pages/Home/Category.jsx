import React from 'react'
import Card from './Card'

const Category = () => {
  return (
    <>
    <div className='px-14 py-10 bg-white'>

       <p className="mb-5 text-[12px] font-bold uppercase tracking-[1.5px] text-primary">
            Explore by category
          </p>


          <h1 className='text-[40px] font-bold text-foreground'>Find the animation you need</h1>

          <p className="mt-2 max-w-[560px] text-[18px] leading-[1.5] text-muted-foreground">
            Browser by category and start building expressive experience
          </p>

          <Card/>

          



    </div>
    </>
  )
}

export default Category