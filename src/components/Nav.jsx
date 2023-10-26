import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../assets/Logo.png";
import menu from "../Assets/menu.png"
import close from "../Assets/close.png"
import { useState } from "react";

const nav = () => {
  const [toggle, setToggle] = useState(false)
  const [diet, setDiet] = useState(false)
  const handleClick =() => {setToggle((prev)=> !prev)};
  const handleDiet =() => {setDiet((prev)=> !prev)};


  return (
  <nav className={`flex fixed top-0 left-0 pl-[16px] lg:pl-0 pr-[16px] lg:pr-0  w-[100vw]
   bg-[#F2AC24]`}>
    
    <div className="flex items-center text-[#C62024] mr-auto lg:ml-[10%]">
        <img src={Logo} alt='silvermoon_logo' className='w-[64px] h-[64px] mr-2'/>
        <h1 className='font-bold lg:text-[28px] text-[18px] s-gradient'>Muscle Belf</h1>
    </div>

       <ul className="list-non lg:flex hidden items-center mr-[10%]">
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/Team">Our Team</Link></li>
          <li><Link to="/Exercises">Exercises</Link></li>
          <li><Link>Diet
              <ul>
                <li><Link to="/Daily">Daily Colorie</Link></li>
                <li><Link to="/BMI">BMI Calculator</Link></li>
                <li><Link to="/Intake">Calorie Intake</Link></li>
                <li><Link to="/Burned">Burned Calorie</Link></li>
              </ul>      
          </Link></li>
          <li><Link to="/Membership">Membership</Link></li>
       </ul>

        <div className="lg:hidden flex">
          <img src={toggle ? close : menu} alt="menu"
          className="mt-[20px] w-[32px] h-[32px] object-contain"
          onClick={handleClick}
          />


          <div className={`${toggle ? 'flex' : 'hidden'} p-2 absolute top-12 
          right-0 min-w-[140px] rounded-xl sidebar z-10`}>

        <ul className={`list-non flex justify-end items-end flex-1 flex-col mt-[6px]
        bg-[#F2AC24e6]`}>
          <li className="pb-[4px] pt-[4px]"><Link to="/" onClick={handleClick}>Home Page</Link></li>
          <li className="pb-[4px] pt-[4px]"><Link to="/Team" onClick={handleClick}>Our Team</Link></li>
          <li className="pb-[4px] pt-[4px]"><Link to="/Exercises" onClick={handleClick}>Exercises</Link></li>
          <li className="flex flex-col items-end" onClick={handleDiet}>Diet
              <div className={`${diet ? "flex" : "hidden"} flex-col top-12 my-2 pl-2 text-left text-[.9rem] font-semi-bold`}>
                <Link to="/Daily" onClick={handleClick}>Daily Colorie</Link>
                <Link to="/BMI" onClick={handleClick}>BMI Calculator</Link>
                <Link to="/Intake" onClick={handleClick}>Calorie Intake</Link>
                <Link to="/Burned" onClick={handleClick}>Burned Calorie</Link>
              </div>      
          </li>
          <li className="pb-[4px] pt-[4px]"><Link to="/Membership" onClick={handleClick}>Membership</Link></li>
        </ul>

          </div>
        </div>

        
  </nav>

      
  
  )
}

export default nav