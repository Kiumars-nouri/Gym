import React, {useEffect, useState} from 'react'
import {fetchData, intakeOptions} from "./Api.jsx"
import close from "../assets/close.png"


const CalorieIntake = () => {

  const [food, setFood] = useState()
  const [nutrition, setNutrition] = useState()
  const [totalCalories, setTotalCalories] = useState(0)
  const [totalProtein, setTotalProtein] = useState(0)
  const [totalCarb, setTotalCarb] = useState(0)
  const [totalFat, setTotalFat] = useState(0)
  let eachIntake = document.getElementById('eachIntake');


const btnClicked = (e) =>{
  e.preventDefault()
  const fetchNutritionData = async() =>{
      try{const nutritionData = await fetchData(`https://api.calorieninjas.com/v1/nutrition?query=${food}`, 
      intakeOptions);

      setNutrition(nutritionData.items[0]);
      console.log(nutrition)

  }  catch(error){
    console.log(error)
  }}
   fetchNutritionData();
   document.getElementById("input").value= ""
}

const pushFood = (e) =>{
    e.preventDefault()
    if(nutrition){
        let div = document.createElement('div');

        let element1 = document.createElement('p');
         element1.innerHTML = food;

         let element2 = document.createElement('p');
         element2.innerHTML = nutrition.calories;

         let element3 = document.createElement('p');
         element3.innerHTML = nutrition.protein_g;

         let element4 = document.createElement('p');
         element4.innerHTML = nutrition.carbohydrates_total_g;

         let element5 = document.createElement('p');
         element5.innerHTML = nutrition.fat_total_g;

         let element6 = document.createElement('button');
         element6.innerHTML = "\u00d7";
         element6.classList.add("close-btn")
         element6.setAttribute("id", "close-btn")

         eachIntake.append(div);
         div.classList.add("intake-row", "each-intake-row")
         div.append(element1, element2, element3, element4, element5, element6);

        setTotalCalories((totalCalories) => totalCalories + nutrition.calories)
        setTotalProtein((totalProtein) => totalProtein + nutrition.protein_g)
        setTotalCarb((totalCarb) => totalCarb + nutrition.carbohydrates_total_g)
        setTotalFat((totalFat) => totalFat + nutrition.fat_total_g)         
    }
}


useEffect(()=>{
  let eachIntake = document.getElementById('eachIntake');
  eachIntake?.addEventListener("click", function(e){
        if(e.target.tagName === "BUTTON"){
            setTotalCalories((totalCalories) => totalCalories - e.target.parentElement.children[1].innerHTML)
            setTotalProtein((setTotalProtein) => setTotalProtein - e.target.parentElement.children[2].innerHTML)
            setTotalCarb((totalCarb) => totalCarb - e.target.parentElement.children[3].innerHTML)
            setTotalFat((totalFat) => totalFat - e.target.parentElement.children[4].innerHTML)

        e.target.parentElement.remove()
        }       
    })}, [])



  return (
    <section className='mt-[60px] flex justify-center'>

      
      <div className='container xl:mx-[5%] 2xl:mx-[20%]'>

        <div className='h-div'><h1 className='diet-h h-gradient'>Measure calories of your consumed food</h1></div>

        <div className='app app-intake'>
            <form>
              <fieldset>
                <label>Ingredient or food:
                  <input id='input' type='text' onChange={(e)=> setFood(e.target.value)}/>
                </label>

              

                <button className='btn' onClick={btnClicked}>Check Nutirtion</button>
              </fieldset>
            </form>

            {nutrition && <div className='nutrition'>
                <h2>{nutrition.serving_size_g}gr - {food}</h2>
                <p>Calories: {nutrition.calories}</p>
                <p>Protein: {nutrition.protein_g}</p>
                <p>Carbohydrates: {nutrition.carbohydrates_total_g}</p>
                <p>Fat: {nutrition.fat_total_g}</p>
                <button className='btn add-btn' onClick={pushFood}>Add to List</button>
            </div>}
        </div>

        

        <div id='table' className='tables table-intake'>

            <div className='intake-header'>
                <h2>Food</h2>
                <h2>Cal.</h2>
                <h2>Protein</h2>
                <h2>Carb.</h2>
                <h2>Fat</h2>
            </div>

            <div id='eachIntake'>
            </div>


            <div className='intake-row intake-overal'>
                <p>Overal</p>
                <p>{totalCalories.toLocaleString(undefined, {maximumFractionDigits:1})}</p>
                <p>{totalProtein.toLocaleString(undefined, {maximumFractionDigits:1})}</p>
                <p>{totalCarb.toLocaleString(undefined, {maximumFractionDigits:1})}</p>
                <p>{totalFat.toLocaleString(undefined, {maximumFractionDigits:1})}</p>
            </div>

        </div>
        
      </div>
    </section>
  )
}

export default CalorieIntake