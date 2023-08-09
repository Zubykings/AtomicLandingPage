import React from 'react'
import Button from './Button'

const Card = (props) => {
    const {img, title, description} = props
  return (
    <div className='w-[30%] pt-8 pb-4 flex flex-col gap-2 text- '>
      <img src={img} alt="" className='md:w-[50px] w-[40px]' />
      <h1 className='font-bold text-base'> {title} </h1>
      <p className='text-sm lg:text-base'> {description} </p>
      <Button />
    </div>
  )
}
// console.log(p)
export default Card
