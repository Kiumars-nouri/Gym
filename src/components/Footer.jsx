import React from 'react'
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <section className='bg-[#F2AC24] pb-[6px] pt-[6px] flex lg:flex-row flex-col justify-center items-center gap-x-16 text-[#020f25]'>
      <div className="flex items-center text-[#C62024] lg:ml-[10%]">
        <img src={Logo} alt='silvermoon_logo' className='w-[64px] h-[64px] mr-2'/>
        <h1 className='font-bold lg:text-[28px] text-[18px] s-gradient'>Muscle Belf</h1>
      </div>

      <div className='mr-[10%] flex flex-col lg:flex-row gap-y-2 lg:justify-center lg:items-center gap-x-16 text-[18px] lg:ml-0 ml-4 lg:pb-0 pb-4'>
        <div>
        <p>E-mail: <a href="mailto:kiumars90@yahoo.com?subject=more%20information" className='underline'>info@muscle-belf.com</a></p>
        <p>Phone: <a href='tel:123456789' className='underline'>123456789</a></p>
        </div>
        <p>Address: <a className='underline' href='https://goo.gl/maps/NdvGYuYo58AkfZEF8' target='_blank'>N:9 - 66 St. - city XX</a></p>
        <p>All pics are taken from <a className='underline text-[#C62024]' href='https://www.freepik.com/' target='_blank'>freepik</a></p>
      </div>
    </section>
  )
}

export default Footer