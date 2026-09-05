import React from 'react'
import img1 from "../../../assests/Parallax Scroll Images/1.jpg"
import img2 from "../../../assests/Parallax Scroll Images/2.jpg"
import img3 from "../../../assests/Parallax Scroll Images/3.jpg"
import img4 from "../../../assests/Parallax Scroll Images/4.jpg"
import img5 from "../../../assests/Parallax Scroll Images/5.jpg"
import img6 from "../../../assests/Parallax Scroll Images/6.jpg"
import img7 from "../../../assests/Parallax Scroll Images/7.jpg"
import img8 from "../../../assests/Parallax Scroll Images/8.jpg"
import img9 from "../../../assests/Parallax Scroll Images/9.jpg"
import img10 from "../../../assests/Parallax Scroll Images/10.jpg"
import img11 from "../../../assests/Parallax Scroll Images/11.jpg"
import img12 from "../../../assests/Parallax Scroll Images/12.jpg"

const Images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
]

const ScrollOne = () => {
  return (
    <div>ScrollOne</div>
  )
}

export default ScrollOne



const column = ({Images})=>{
  return (
    <>
      {Images.map((item)=>(
        <img src={item} alt="image" />
      ))}
      </>
  )
}