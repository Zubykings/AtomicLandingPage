import React from 'react'
import Button from './Button'

const Card = (props) => {
    const {img, title, description} = props
  return (
    <div className='w-[30%] pt-8 pb-4 '>
      <img src={img} alt="" className='w-[50px]' />
      <h1 className='font-bold'> {title} </h1>
      <p> {description} </p>
      <Button />
    </div>
  )
}
// console.log(p)
export default Card
