import {useState} from "react"
import {validateEmail} from "../utils.jsx"
import { useLocation } from "react-router";
import { Link } from 'react-router-dom'
import close from "../assets/close-red.png"
import { motion } from 'framer-motion'


export default function MembershipForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState("")
    const [popup, setPopup] = useState(false)
    const location = useLocation()
    


    const formIsValid = () =>{
        return(
        name &&
        date&&
        validateEmail(email) &&
        phone.length =="10")
    }


    const subscribed = (e)=>{
      e.preventDefault()
      setName("")
      setEmail("")
      setPhone("")
      setDate("")
      setPopup(true)      
    }
      



    return(

        <section id="subscribtion" className="mt-[60px] pt-[60px] pb-[60px] registration md:h-full flex flex-col justify-center bg-[#ecf0f1]">


            {location.state ==="silver" && <div className="mr-4 md:ml-[20%] ml-4 flex md:flex-row 
             md:justify-start justify-center  items-center gap-x-2 mb-2">
            <Link to="/MembershipForm" state="gold">
              <button className='font-bold text-[24px] md:w-[150px] w-[150px] h-[50px]
              border-[1px] border-[#020f25] gold mt-[8px] rounded-[20px]'>
              gold</button>
            </Link>
            <Link to="/MembershipForm" state="premium">
              <button className='font-bold text-[24px] md:w-[150px] w-[150px] h-[50px]
              premium border-[1px] border-[#020f25] mt-[8px] rounded-[20px]'>
              premium</button>
            </Link>
            </div>}

            {location.state ==="premium" && <div className="mr-4 md:ml-[20%] ml-4 flex md:flex-row 
             md:justify-start justify-center  items-center gap-x-2 mb-2">
            <Link to="/MembershipForm" state="silver">
              <button className='font-bold text-[24px] md:w-[150px] w-[150px] h-[50px]
              border-[1px] border-[#020f25] silver mt-[8px] rounded-[20px]'>
              silver</button>
            </Link>
            <Link to="/MembershipForm" state="gold">
              <button className='font-bold text-[24px] md:w-[150px] w-[150px] h-[50px]
              gold border-[1px] border-[#020f25] mt-[8px] rounded-[20px]'>
              gold</button>
            </Link>
            </div>}

            {location.state ==="gold" && <div className="mr-4 md:ml-[20%] ml-4 flex md:flex-row 
             md:justify-start justify-center  items-center gap-x-2 mb-2">
            <Link to="/MembershipForm" state="silver">
              <button className='font-bold text-[24px] md:w-[150px] w-[150px] h-[50px]
              border-[1px] border-[#020f25] silver mt-[8px] rounded-[20px]'>
              silver</button>
            </Link>
            <Link to="/MembershipForm" state="premium">
              <button className='font-bold text-[24px] md:w-[150px] w-[150px] h-[50px]
              premium border-[1px] border-[#020f25] mt-[8px] rounded-[20px]'
>
              premium</button>
            </Link>
            </div>}



        <div className='md:mr-[20%] mr-[8px] md:ml-[20%] ml-[8px] flex md:flex-row flex-col 
        justify-left items-center'>


            <form className={`${location.state} md:w-[310px] w-[95%] silver 
            membership-card flex flex-col justify-between text-center rounded-[20px] p-8`}>
                <fieldset>
                    <h2 className="text-[28px] font-bold">Join our family</h2>

                    <div>
                        <label>Name:<span className="text-[red]">*</span>
                            <input type={"text"}
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            placeholder="Name Surname"
                            pattern="[A-Za-z\s]{3,}"
                            />
                        </label>
                    </div>

                    <div>
                        <label>E-mail:<span className="text-[red]">*</span>
                            <input type={"email"}
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            placeholder="E-mail"
                            />
                        </label>
                    </div>

                    <div>
                        <label>Phone Number:<span className="text-[red]">*</span>(10 digits)
                            <input type={"tel"}
                            value={phone}
                            onChange={(e)=>{setPhone(e.target.value)}}
                            placeholder="xxx xxx xx xx"
                            min={"10"}
                            max={"10"}
                            />
                        </label>
                    </div>

                    <div>
                        <label>Starting date:<span className="text-[red]">*</span>
                            <input type={"date"}
                            value={date}
                            onChange={(e)=>{setDate(e.target.value)}}
                            placeholder="dd/mm/yyyy"
                            />
                        </label>
                    </div>                    

                    <button type="submit" disabled={!formIsValid()} onClick={subscribed}
                    className='font-bold text-[24px] md:w-[150px] w-[150px] h-[50px]
                    bg-[#C62024] mt-[16px] rounded-[20px]'>
                      Subscribe
                    </button>
                    
                </fieldset>
            </form>


        {popup && <motion.div initial={{y: -500}} animate={{y:0}} transition={{duration: 1}}
        className="fixed md:top-[8%] top-[40%] md:left-[40%] bg-[#F2AC24] rounded-[20px] p-4 flex flex-col items-center justify-center">

          <button className="w-8 h-8 absolute top-2 right-2" onClick={()=> setPopup(false)}>
            <img src={close} alt="close_button"/>
          </button>

          <h2 className="text-[28px] mt-6">Welcome to Our Family</h2>
          <p className="text-[18px]">Check out Our Team</p>

          <button
              className='font-bold text-[24px] md:w-[150px] w-[150px] h-[50px]
              bg-[#C62024] mt-[16px] rounded-[20px]'>
              <Link to="/Team">Team</Link>
          </button>
        </motion.div>}


        </div>        

        </section>
    );
};