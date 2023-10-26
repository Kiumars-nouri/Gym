import React, {useEffect, useState} from 'react'
import {fetchData, burnedOptions} from "./Api.jsx"


const BurnedCalories = () => {

  const [activity, setActivity] = useState()
  const [caloriesBurned, setCaloriesBurned] = useState()
  const [duration, setDuration] = useState()
  const [totalCalories, setTotalCalories] = useState(0)
  


const btnClicked = (e) =>{
  e.preventDefault()
  const fetchActivityData = async() =>{
      try{const activityData = await fetchData(`https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}&duration=${duration}`, 
      burnedOptions);

      setCaloriesBurned(activityData[0]);
      console.log(activityData)

  } catch(error){
    console.log(error)
  }}
  fetchActivityData();
   document.getElementById("input").value= ""
   document.getElementById("duration").value= ""
}

const pushActivity = (e) =>{
    e.preventDefault()
    if(caloriesBurned){
        let div = document.createElement('div');

        let element1 = document.createElement('p');
         element1.innerHTML = activity;

         let element2 = document.createElement('p');
         element2.innerHTML = duration;

         let element3 = document.createElement('p');
         element3.innerHTML = caloriesBurned.total_calories;

         let element4 = document.createElement('button');
         element4.innerHTML = "\u00d7";
         element4.classList.add("close-btn")
         element4.setAttribute("id", "close-btn")

         let eachIntake = document.getElementById('eachBurned');
         eachIntake.append(div);
         div.classList.add("burned-row", "each-burned-row")
         div.append(element1, element2, element3, element4);

        setTotalCalories((totalCalories) => totalCalories + caloriesBurned.total_calories)

        
    }
}


useEffect(()=>{
    let eachRow = document.getElementById('eachBurned');
    eachRow?.addEventListener("click", function(e){
        if(e.target.tagName === "BUTTON"){
            setTotalCalories((totalCalories) => totalCalories - e.target.parentElement.children[2].innerHTML)


        e.target.parentElement.remove()    
        }       
    })}, [])



  return (
    <section className='mt-[60px] flex justify-center'>

      
      <div className='container xl:mx-[5%] 2xl:mx-[20%]'>

        <div className='h-div'><h1 className='diet-h h-gradient'>Measure your burned calories during exercise</h1></div>

        <div className='app app-burned'>
          <p>The api from ninja.api is bugged. Type the activity w/o the first letter. I.E: "unning" instead of "running"</p>
            <form>
              <fieldset>
                <label>Activity:
                  <input id='input' type='text' onChange={(e)=> setActivity(e.target.value)}/>
                </label>

                 <label>Duration (1-60 minutes):
                  <input id='duration' type='number' onChange={(e)=> setDuration(e.target.value)}/>
                </label>             

                <button className='btn' onClick={btnClicked}>Check Activity</button>
              </fieldset>
            </form>

            {caloriesBurned && <div className='nutrition'>
                <h2>{activity}</h2>
                <p>Duration: {duration}</p>
                <p>Calories / hour: {caloriesBurned.calories_per_hour}</p>                
                <p>Burned Calories: {caloriesBurned.total_calories}</p>
                <button className='btn add-btn' onClick={pushActivity}>Add to List</button>
            </div>}
        </div>

        <div id='table' className='tables table-burned'>

            <div className='burned-header'>
                <h2>Activity</h2>
                <h2>min.</h2>
                <h2>Cal.</h2>
            </div>

            <div id='eachBurned'>
            </div>


            <div className='burned-row burned-overal'>
                <p>Overal</p>
                <p className='total-burned'>{totalCalories}</p>
            </div>

        </div>
        
      </div>
    </section>
  )
}

export default BurnedCalories