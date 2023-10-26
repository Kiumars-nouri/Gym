import React from 'react'
import {Trainers} from "./TrainersInfo.jsx"
import Card from "./Card"
import founder from "../assets/founder.jpg"
import ContactForm from "./ContactForm.jsx"
import {motion} from "framer-motion"
import {StagWrapper, fadeIn, moveIn} from "../utils.jsx"



const Team = () => {
  
  return (
    <section className='mt-[60px] pt-[60px] bg-[#ecf0f1]'>
        
        <div className='bg-[#815c39] rounded-[20px] p-4 mb-[32px] text-[#020f25] flex flex-col-reverse md:flex-row text-center 
        justify-center items-center gap-y-4 mr-[8px] 2xl:mx-[15%] ml-[8px]'>

          <div className='bg-[#020f25] rounded-[19px] rounded-r-0'>
          <Card 
          name="Mike & taylor"
          image={founder}
          desc="Founders of Muscle Belf. Holder of multiple Olypic medals in track-and-field sports and graduateds of Exercise Physiology." />
          </div>

          <div>
            <motion.h1 variants={fadeIn(.75, 1)}
            className='md:text-[64px] font-bold text-[36px] mt-4 mb-[8px] sh-gradient'>Our Family</motion.h1>
            <motion.p variants={moveIn("left", .5, 1)} className='md:text-[18px] md:mb-[24px] mb-4 mr-8 ml-8 text-justify'>
            The Muscle Belf, which has been operating in the sports and health sector for 13 years, 
            continues to provide quality service. At The Muscle Belf, you will experience the difference 
            of the fitness of the most suitable sports and nutrition porogram application for your body and 
            the difference of continuing your life in a healthy and vigorous way under the supervision of the 
            experts and sports consultants.</motion.p>
          </div>
        </div>


        <div className='flex flex-wrap md:flex-row justify-center gap-x-8 md:gap-y-8 gap-y-4
         mr-[8px] 2xl:mx-[15%] ml-[8px]'>
        {Trainers.map((trainer, index)=>{
            return(
              <motion.div variants={moveIn(index%2==0 ? "right" : "left", index * 0.5, 0.75)}
              key={trainer.key} className='flex flex-col justify-between bg-[#020f25] rounded-[20px] text-center'>
                <Card name={trainer.name} image={trainer.img} desc={trainer.desc} />
            </motion.div>)
          })}
        </div>

        <div className='bg-[#815c39] rounded-[20px] p-4 mb-[32px] text-[#020f25]  text-center gap-y-4
        mr-[8px] 2xl:mx-[15%] ml-[8px] mt-[60px]'>
          <ContactForm />
        </div>


    </section>
  )
}

export default StagWrapper(Team)