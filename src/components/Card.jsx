import React from 'react'

const Card = ({name, image, desc}) => {
  return (
    <div  className='md:w-[370px]'>
    <h2 className='text-[36px] p-2 font-bold bg-[#F2AC24] rounded-t-[18px]'>{name}</h2>
    <img src={image} alt={name} className='w-[100%] h-[240px]'/>
    <p className='p-4 bg-[#020f25] text-[#ecf0f1] rounded-[20px] text-justify'>{desc}</p>
    </div>
  )
}

export default Card