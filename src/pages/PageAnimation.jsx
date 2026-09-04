import React from 'react'
import PageAnimationOne from "../components/PageAnimationOne/PageAnimationOne"
import { Link } from 'react-router-dom'

const PageAnimation = () => {
  return (
    <>
    <div className='p-5 flex items-center'>

      <div className='flex gap-4'>

        <Link to="page-animation-one"> Pagination One</Link>
        <span> Pagination Two </span>
        <span> Pagination Three</span>

      </div>



    


      

      
    </div>

    </>
  )
}

export default PageAnimation