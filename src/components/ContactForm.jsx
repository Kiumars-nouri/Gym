import {useState} from "react"
import { motion } from 'framer-motion'
import close from "../assets/close-red.png"


export default function ContactForm(){
    const [name, setName] = useState("");
    const [text, setText] = useState("")
    const [phone, setPhone] = useState("")
    const [popup, setPopup] = useState(false)


    const handleSubmit = (e) =>{
        e.preventDefault()
        clear();
    };

    const clear = () =>{
        setName("");
        setPhone("");
        setText("");
        setMsg(true)
    };

    const formIsValid = () =>{
        return(
        name &&
        text.length >10 &&
        phone.length =="10")
    }

    return(
        <div className="mt-8 md:mr-[10%] md:ml-[10%]">
            <form onSubmit={handleSubmit}>
               {popup ? <motion.h2 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: .5}}
                        className="text-[28px] md:text-[48px] font-bold sh-gradient">We will reach you out soon.</motion.h2>

                : <h2 className="text-[24px] md:text-[48px] font-bold">Send a message</h2>}

                <fieldset className="md:grid md:grid-cols-2 text-left gap-x-4 text-[#020f25]">                   

                    <div className="w-full">
                        <label className="w-full">Name:<span className="text-[red]">*</span>
                            <input type={"text"}
                            value={name}
                            onChange={(e)=>{setName(e.target.value), setPopup(false)}}
                            placeholder="Name Surname"
                            pattern="[A-Za-z\s]{3,}"
                            />
                        </label>
                    </div>


                    <div className="w-full">
                        <label className="w-full">Phone Number:<span className="text-[red]">*</span>(10 digits)
                            <input type={"tel"}
                            value={phone}
                            onChange={(e)=>{setPhone(e.target.value)}}
                            placeholder="xxx xxx xx xx"
                            min={"10"}
                            max={"10"}
                            />
                        </label>
                    </div>

                    <div className="col-span-2">
                      <label className="w-full">Message:<span className="text-[red]">*</span>(at least 10 characters)
                      <textarea className="w-full" type={"text"}
                      value={text}
                      onChange={(e)=>{setText(e.target.value)}}
                      placeholder="Write your message"
                      />
                      </label>
                    </div>

                    <button type="submit" disabled={!formIsValid()} onClick={()=> setPopup(true)}
                    className='font-bold text-[24px] md:w-[200px] w-[180px] h-[50px]
                     border-[4px] pr-2 pl-2 bg-[#C62024] border-[#F2AC24] rounded-lg mt-2'
                    >
                      {formIsValid() ? "Send" : "Fill the Form"}
                    </button>
                    
                </fieldset>
            </form>

        

        </div>
    );
};