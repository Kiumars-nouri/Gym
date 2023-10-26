import React, {useState} from 'react'
import {fetchData, dailycalorieOptions} from "./Api.jsx"
import up from "../assets/up.png"
import down from "../assets/down.png"


const DailyCalorie = () => {

  const [age, setAge] = useState()
  const [gender, setGender] = useState()
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [activityLevel, setActivityLevel] = useState("level_1")

  const [calorieCalculator, setCalorieCalculator] = useState()

const btnClicked = (e) =>{
  e.preventDefault()
  const fetchCalorieData = async() =>{
      try{const calorieData = await fetchData(`https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&weight=${weight}&height=${height}&activitylevel=${activityLevel}`, 
                                           dailycalorieOptions);

      setCalorieCalculator(calorieData.data.goals);
  } catch(error){
    console.log(error)
  }}

  fetchCalorieData();
}

  function calNum(n){
      return(
      Math.floor(calorieCalculator[`${n}`].calory).toLocaleString()      
    )}
    

  return (
    <section className='mt-[60px] flex justify-center'>

      
      <div className='container xl:mx-[5%] 2xl:mx-[20%]'>

        <div className='h-div'><h1 className='diet-h h-gradient'>Measure your daily calorie intake for your deisred goal</h1></div>

        <div className='app app-daily'>
            <form>
              <fieldset>
                <label>Age(1-80 years):
                  <input type='number' onChange={(e)=> setAge(e.target.value)}/>
                </label>

              <div className='radio-btn'><span>Gender:</span>         
                <label>
                  <input type='radio' name='gender' onClick={(e)=> setGender("female")}></input> Female
                </label>
                <label>
                  <input type='radio' name='gender' onClick={(e)=> setGender("male")}></input> Male
                </label>
              </div>     

                <label>Height(130-230 cm):
                  <input type='number' min="130" max="230" onChange={(e)=> setHeight(e.target.value)}/>
                </label>

                <label>Weight(40-160 kg):
                  <input type='number' min="40" max="160" onChange={(e)=> setWeight(e.target.value)}/>
                </label>

                <label>Activity level:
                  <select className='activity' name='activityLevel' onChange={(e)=> setActivityLevel(e.target.value)}>
                    <option value="level_1">Sedentary: little or no exercise</option>
                    <option value="level_2">Exercise 1-3 times/week</option>
                    <option value="level_3">Exercise 4-5 times/week</option>
                    <option value="level_4">intense exercise 3-4 times/week</option>
                    <option value="level_5">Intense exercise 6-7 times/week</option>
                    <option value="level_6">Very intense active life-style</option>
                  </select>                  
                </label>

                <button className='btn' onClick={btnClicked}>Calculate</button>
              </fieldset>
            </form>
        </div>

        <div className='tables table-daily'>

           <div className='text-center daily-change'>
            <h2>change</h2>
            <p><img src={up} alt='up-arrow'/>1 kg</p>
            <p><img src={up} alt='up-arrow'/>0.5 kg</p>
            <p><img src={up} alt='up-arrow'/>0.250 gr</p>
            <p><img src={down} alt='down-arrow'/>1 kg</p>
            <p><img src={down} alt='down-arrow'/>0.5 kg</p>
            <p><img src={down} alt='down-arrow'/>0.250 gr</p> 
            <p>Maintain</p>
           </div>

           <div className='text-center'>
            <h2>Cal.</h2>
            {calorieCalculator && Object.keys(calorieCalculator).slice(1).toReversed().map((cal, i)=>{
               return(<p key={i}>{calNum([`${cal}`])}</p>) 
              })
            }

            <p>{calorieCalculator && Math.floor(calorieCalculator["maintain weight"]).toLocaleString()}</p>
           </div>
           
        </div>
        
      </div>
    </section>
  )
}

export default DailyCalorie