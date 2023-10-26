import React from 'react'
import {Link} from "react-router-dom"
import { motion } from 'framer-motion'
import {StagWrapper} from "../utils.jsx"


const Hero = () => {

  
  return (
    <>

      <div className='hero lg:h-[calc(100vh-58px)] pb-8 text-[#ecf0f1] flex flex-col text-center mt-16'>

        <motion.h1 initial={{y: -500}} animate={{y:0}} transition={{duration: 1}} 
        className='md:text-[64px] font-bold text-[24px] md:mt-[50px] mt-4 mb-[8px] h-gradient'>Transform Yourself</motion.h1>

        <motion.p initial={{x: -1000}} animate={{x:0}} transition={{duration: 1}}
        className='md:w-[560px] self-center md:text-[18px] text-[14px] md:mb-[24px] mb-4 mr-8 ml-8 bg-[#6B6F7033] md:bg-inherit rounded-lg'>
          We have the most educated, smartest coaches who lead the way to you desired body and physical health.</motion.p>

        <motion.button initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1}}
        className='self-center border-[2px] md:w-[210px] md:p-2 p-1 border-[#F2AC24] rounded-lg md:text-[24px] h-gradient'>
          <Link to={"/Membership"}>Begin Training</Link></motion.button>

      </div>



    </>
  )
}

export default StagWrapper(Hero)