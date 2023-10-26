import React from 'react'
import {Link} from "react-router-dom"
import {Activities} from "./Classes.jsx"
import Card from "./Card"
import { motion } from 'framer-motion'
import {StagWrapper, moveIn} from "../utils.jsx"

const Ativities = () => {
  return (
    <>
    <div className='mt-[60px]'>
        <h1 className='md:text-[58px] font-bold text-center text-[24px] mt-4 mb-[8px] h-gradient'>Classes for Everyone</h1>
        
        <div className='flex flex-wrap md:flex-row justify-center gap-x-8 md:gap-y-8 gap-y-4 mr-[8px] md:mx-[10%] lg:mx-[5%] 2xl:mx-[20%] ml-[8px]'>
          {Activities.map((activity, index)=>{
            return(
              <motion.div  variants={moveIn(index%2==0 ? "right" : "left", index * 0.5, 0.75)}
              key={activity.key} className='flex flex-col justify-between bg-[#020f25] rounded-[20px] text-center'>
                <Card name={activity.name} image={activity.img} desc={activity.desc} />
              <Link to={"/Team"} className='border-b-2 border-[#F2AC24] inline text-[#ecf0f1] w-[120px] self-center text-[18px] mb-6'>Learn More</Link>
            </motion.div>)
          })}
        </div>
      </div>
    </>
  )
}

export default StagWrapper(Ativities)