import React from 'react'
import PageAnimationOne from "../components/PageAnimationOne/PageAnimationOne"
import { Link } from 'react-router-dom'

const PageAnimation = () => {
  return (
    <>
    <div className='p-5 flex items-center'>

      <div className='flex gap-4'>

        <Link to="page-animation-one"> Pagination One</Link>
        <Link to="page-animation-two"> Pagination Two</Link>
        <Link to="page-animation-three"> Pagination THree</Link>

      </div>



    


      

      
    </div>

    </>
  )
}

export default PageAnimation