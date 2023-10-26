import { Link } from 'react-router-dom'
import {motion} from "framer-motion"

const Membership = () => {


  return (
    <section className={`mt-[60px] pt-[60px] bg-[#ecf0f1] pb-[60px] flex flex-col justify-center items-center`}>

        <div className='lg:mx-[20%] flex lg:flex-row flex-col 
        justify-center items-center lg:gap-x-16 gap-y-8 w-[90%]'>

        <motion.div initial={{x: -1000}} animate={{x:0}} transition={{duration: 1}}
        className='lg:w-[310px] w-[100%] min-h-[480px] silver membership-card
        flex flex-col justify-between text-center rounded-[20px] pl-8 pr-8'>

        <div className='mt-[15%]'>
            <h1 className='lg:text-[36px] text-[24px] font-bold'>Silver</h1>
          </div>

            <div>
            <h2 className='text-[24px]'>Services:</h2>
            <ul className=''>
                <li>Have access to gym 24/7</li>
                <li>Monthly workout plan</li>
            </ul>
          </div>

          <div className='mb-[15%]'>
            <p>Monthly subscription: <span>$7.99</span></p>

            <div>
            <p>Anual subscription:
                <span className='line-through decoration-[#C62024] decoration-2'> $95.88</span>
                <span> $75</span>
            </p>
            </div>

            <Link to="/MembershipForm" state={"silver"}>
              <button className='font-bold text-[24px] lg:w-[150px] w-[150px] h-[50px]
              bg-[#C62024] mt-[8px] rounded-[20px]'>
              Subscribe</button>
            </Link>
          </div>
        </motion.div>



        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: .5}}
        className='lg:w-[310px] w-[100%] h-[480px] gold membership-card
        flex flex-col justify-between text-center rounded-[20px]'>

          <div className='mt-[15%]'>
            <h1 className='lg:text-[36px] text-[24px] font-bold'>Gold</h1>
          </div>

            <div>
            <h2 className='text-[24px]'>Services:</h2>
            <ul className=''>
                <li>Have access to gym 24/7</li>
                <li>Pools & Sauna: 6 a.m - 11 p.m</li>
                <li>Monthly workout plan & diet</li>
            </ul>
          </div>

          <div className='mb-[15%]'>
            <p>Monthly subscription: <span>$11.99</span></p>

            <div>
            <p>Anual subscription:
                <span className='line-through decoration-[#C62024] decoration-2'> $143.88</span>
                <span> $115</span>
            </p>
            </div>

            <Link to="/MembershipForm" state="gold">
              <button className='font-bold text-[24px] lg:w-[150px] w-[150px] h-[50px]
              bg-[#C62024] mt-[8px] rounded-[20px]'>
              Subscribe</button>
            </Link>
          </div>
        </motion.div>



        <motion.div initial={{x: +1000}} animate={{x:0}} transition={{duration: 1}}
        className='lg:w-[310px] w-[100%] h-[480px] premium membership-card
        flex flex-col justify-between text-center rounded-[20px]'>

          <div className='mt-[15%]'>
            <h1 className='lg:text-[36px] text-[24px] font-bold'>Premium</h1>
          </div>

            <div>
            <h2 className='text-[24px]'>Services:</h2>
            <ul className=''>
                <li>Have access to gym 24/7</li>
                <li>Pools & Sauna: 6 a.m - 11 p.m</li>
                <li>Monthly workout plan & diet</li>
                <li>Personal trainer</li>
                <li>Free buffet</li>
            </ul>
          </div>

          <div className='mb-[15%]'>
            <p>Monthly subscription: <span>$24.99</span></p>

            <div>
            <p>Anual subscription:
                <span className='line-through decoration-[#C62024] decoration-2'> $299.88</span>
                <span> $239</span>
            </p>
            </div>

            <Link to="/MembershipForm" state="premium">
              <button className='font-bold text-[24px] lg:w-[150px] w-[150px] h-[50px]
              bg-[#C62024] mt-[8px] rounded-[20px]'
              onClick={() => {setBackground("premium"); setShow("show")}}>
              Subscribe</button>
            </Link>
          </div>
        </motion.div>
     </div>

     <div className='lg:mr-[15%] mr-[8px] lg:ml-[15%] ml-[8px]'>
        <h1 className='lg:text-[48px] font-bold text-[24px] mt-[36px] mt-4 mb-[8px] sh-gradient'>Worthy of Notice:</h1>
        <ul className='contract'>
          <li>Regarding cancelation of anual contracts, your subscribtion will be calculated monthly and the rest will be refunded.</li>
          <li>All members are covered by insurance and in case of any injuries due to failure of equipments will be covered fully.</li>
          <li>It is a public gym, so if you are going for a personal record and need concentration or screaming! let others know in advance!</li>
          <li>If you are going to record your workout, feel free to bring a whole crew for it! just respect other member's privacy.</li>        
          <li>Using towels in gym and suna is necessary. Clean towels can always be provided by the gym in case you do not bring yours.</li>
          <li>We have a small playground for children for age 3-12. Also pools are free for children under 6 years old.</li>
        </ul>

     </div>
    </section>
  )
}

export default Membership