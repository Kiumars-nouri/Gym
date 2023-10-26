import React, {useState} from 'react'
import {fetchData, bmiOptions} from "./Api.jsx"


const Bmi = () => {

  const [age, setAge] = useState()
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()

  const [bodyMeasure, setBodyMeasure] = useState()

const btnClicked = (e) =>{
  e.preventDefault()
  const fetchCalorieData = async() =>{
      try{const bmiData = await fetchData(`https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`, 
                                           bmiOptions);

      setBodyMeasure(bmiData.data);
      console.log(bodyMeasure)
      console.log(age)
      console.log(height)
      console.log(weight)
  } catch(error){
    console.log(error)
  }}

  fetchCalorieData();

}




  return (
    <section className='mt-[60px] flex justify-center'>

      
      <div className='container xl:mx-[5%] 2xl:mx-[20%]'>

        <div className='h-div'><h1 className='diet-h h-gradient'>Check Your BMI</h1></div>

        <div className='app app-bmi'>
            <form>
              <fieldset>
                <label>Age(1-80 years):
                  <input type='number' value={age} onChange={(e)=> setAge(e.target.value)}/>
                </label> 

                <label>Height(130-230 cm):
                  <input type='number' value={height} min="130" max="230" onChange={(e)=> setHeight(e.target.value)}/>
                </label>

                <label>Weight(40-160 kg):
                  <input type='number' value={weight} min="40" max="160" onChange={(e)=> setWeight(e.target.value)}/>
                </label>

                <button className='btn' onClick={btnClicked}>Calculate</button>
              </fieldset>
            </form>
        </div>

        <div className='tables table-bmi'>
          <div className='table-info table-bmi-head'>
            <h2>BMI:</h2>
            <p>{bodyMeasure ? bodyMeasure.bmi : "BMI"}</p>
          </div>

          <div className='table-info table-bmi-head'>
            <h2>Condition:</h2>
            <p>{bodyMeasure ? bodyMeasure.health : "Health condition"}</p>
          </div>

          <div>
            <p className='parag parag-p'>
            Body mass index (BMI) is the ratio of your height and body weight. 
            It is an indirect measure of your body composition. Healthcare providers and 
            the general public uses BMI as a rough estimate of body fatness. 
            </p>

            <h3 className='parag'>What can make body BMI inaccurate?</h3>
            <ul className='parag'>
              <li>Age</li>
              <li>Race And Ethnicity</li>
              <li>Fat Distribution</li>
              <li>Muscle Mass</li>
            </ul>
          </div>

        </div>
        
      </div>
    </section>
  )
}

export default Bmi