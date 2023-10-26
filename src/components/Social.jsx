import React from 'react'
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import { motion } from 'framer-motion'
import {StagWrapper, moveIn, fadeIn} from "../utils.jsx"

const Social = () => {
  return (
    <>
      <div className='hero2 md:h-[600px] h-[400px] text-[#ecf0f1] flex flex-col text-center justify-center items-start mt-[60px] p-4 md:p-16'>  
        <motion.h1 variants={moveIn("right", 1, 1)}
        className='md:text-[64px] text-[20px] font-bold md:mt-[50px] mt-4 mb-[8px] h-gradient'>Follow us and stay tune</motion.h1>
        <div className='flex md:gap-x-8 gap-x-4'>
        <motion.a variants={fadeIn(1.5, 1)}
        href='https://www.facebook.com/' target='_blank'><img src={facebook} alt='instagram' className='md:w-[64px] w-[42px] md:h-[64px] h-[42px]'/></motion.a> 
        <motion.a variants={fadeIn(2, 1)} viewport={{ once: true, amount: .5 }}
        href='https://www.instagram.com/' target='_blank'><img src={instagram} alt='instagram' className='md:w-[64px] w-[42px] md:h-[64px] h-[42px]'/></motion.a>   
        </div>     
      </div>
    </>
  )
}

export default StagWrapper(Social)