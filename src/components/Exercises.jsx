import React, { useEffect } from 'react'
import { useState } from 'react'
import {exerciseOptions, fetchData} from "./FetchData.jsx"
import Logo from "../assets/logo.png"
import first from "../assets/first.png"
import last from "../assets/last.png"
import left from "../assets/left.png"
import right from "../assets/right.png"
import { motion } from 'framer-motion'


const Exercises = () => {

    //Required Const for fetching data
    const [search, setSearch] = useState("")
    const [exercise, setExercise] = useState([])
    const [bodyPart, setBodyPart] = useState([])
    const [selectBodyPart, setSelectBodyPart] = useState("back")




    //Fetching data---------------
    //fething body parts
    useEffect(()=>{
        const fetchExercisesData = async() =>{
            const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyPart(bodyPartData);
        }
        fetchExercisesData();
    }, [])

    //fetching exercises
    useEffect(()=>{
        const fetchExercisesData = async() =>{
            const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectBodyPart}`, exerciseOptions);

            setExercise(['all', ...exercisesData]);
           
        }
        fetchExercisesData();
    }, [selectBodyPart])

    
    //searching fetched data
    const handleSearch = async() => {
        if(search){
            const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises",
                                                 exerciseOptions)

            const searchedExercises = exerciseData.filter((exercise)=>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search) 
            );

            setSearch("");
            setExercise(searchedExercises);
        }}

        //Consts for pagination and gif cards
        const [currentPage, setCurrentPage] = useState(1)
        const recordsPerPage = 9;
        const lastIndex = currentPage * recordsPerPage;
        const firstIndex = lastIndex - recordsPerPage;
        const records = exercise.slice(firstIndex, lastIndex);
        const nPage = Math.ceil(exercise.length / recordsPerPage);
        const pageNumbers = [...Array(nPage + 1).keys()].slice(1);
        const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
        const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);


    //functions for pagination & horizontal slider
    const slideLeft = () => {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 500
    }

    function prePage(){
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
            setMaxPageNumberLimit(maxPageNumberLimit - 1);
            setMinPageNumberLimit(minPageNumberLimit - 1);  
        }
        document.getElementById("exercisesGif").scrollIntoView({behavior : "smooth"})
    }

    function nextPage(){
        if(currentPage !== nPage){
            setCurrentPage(currentPage + 1)
            setMaxPageNumberLimit(maxPageNumberLimit + 1);
            setMinPageNumberLimit(minPageNumberLimit + 1);  
        }
        document.getElementById("exercisesGif").scrollIntoView({behavior : "smooth"})
    }
    
    function changePage(id){
        setCurrentPage(id);
        document.getElementById("exercisesGif").scrollIntoView({behavior : "smooth"})
    }



  return (
    <section className='mt-[60px] bg-[#ecf0f1] pb-[60px]'>

      <div className='exercise md:h-[92vh] pb-16 text-[#ecf0f1] flex flex-col text-center'>
        <motion.h1 initial={{y: -500}} animate={{y:0}} transition={{duration: 1}} 
          className='md:text-[64px] font-bold text-[24px] md:mt-[50px] mt-4 mb-[8px] h-gradient'>
          Check the correct form</motion.h1>
          <motion.p initial={{x: -1000}} animate={{x:0}} transition={{duration: 1}}
          className='md:w-[560px] self-center md:text-[18px] text-[14px] md:mb-[24px] mb-4 mr-8 ml-8 bg-[#6B6F7033] 
          md:bg-inherit rounded-lg'>
          Check the correct form of each exercise and practice them under supervision of your trainer.</motion.p>   
      </div>


    <div><h1 className='text-center md:text-[48px] font-bold text-[24px] md:mt-[50px] mt-4 mb-[8px] h-gradient'>Select Bodypart or search the exercise</h1></div>

    <div className='flex items-center md:mr-[15%] md:ml-[15%] mt-[8px]'>
        <button className='w-[84px] ml-2 mr-2'><img src={left} alt='back' onClick={slideLeft}/></button>

        <div id='slider' className='overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
           {bodyPart.map((item, i)=>{
            return(
                <div key={item} className={`text-[#020f25] md:min-w-[200px] ${i !==0 ? "ml-16" : "ml-8"} ${i === bodyPart.length-1 ? "mr-8" : "mr-16"} h-[200px] inline-block`}>
                    <div className='flex md:min-w-[200px] items-center justify-center flex-col h-full'>
                    <button onClick={()=> setSelectBodyPart(item)}>
                    <img src={Logo} alt='logo' className='w-[64px] h-[64px]'/>
                    <p className='text-[18px] mt-4'>{item}</p>
                    </button>
                    </div>
                </div>
            )})}
        </div>  

        <button className='w-[84px] mr-2 ml-2'><img src={right} alt='next' onClick={slideRight}/></button>
    </div>


    <div className='text-center'>
        <form onSubmit={e => { e.preventDefault()}} className='flex justify-center items-center'>
            <label className='mt-0 mr-[-8px]'>
                <input type='text' placeholder='Search' className='rounded-r-[0] border-r-0 searchbar' 
                onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            </label>
            <button onClick={handleSearch}
            className='font-bold text-[24px] md:w-[150px] w-[150px] h-[50px]
              bg-[#C62024] mt-[8px] rounded-r-[20px]'>
            Search
            </button>
        </form>
    </div>



    <div id='exercisesGif' className='scroll-mt-[96px] scroll-smooth'>
    <div className='mt-[36px] flex flex-wrap md:flex-row justify-center gap-x-8 md:gap-y-8 gap-y-4 2xl:mx-[15%] lg:mx-[10%]
        mx-[8px] '>
        {records.map((workout, i)=>{
            return(
                <div key={i} className='text-[#ecf0f1] w-[300px] m-4 h-[430px] bg-[#020f25] inline-block p-2 rounded-lg'>
                    <img src={workout.gifUrl} alt='gif_of_the_exercise' className='h-[300px] mb-4 rounded-t-md'/>

                    <span className='mr-2 py-1 px-2 bg-[#F2AC24] rounded-full'>{workout.bodyPart}</span>
                    <span className='ml-2 py-1 px-2 bg-[#C62024] rounded-full'>{workout.target}</span>

                    <p className='mt-4 text-[18px]'>{workout.name}</p>
                </div>
            )
        })}
    </div>


    <div className='pt-8 text-[#020f25] text-[18px]'>
        <ul className='flex justify-center items-center'>

                {currentPage > 6 &&<li key={"first_page"} className={`paginate paginate-li flex justify-center items-center 
                "bg-[#F2AC24]`}>
                   <button onClick={()=>{changePage(1); setMinPageNumberLimit(0); setMaxPageNumberLimit(5)}}>
                    <img src={first} alt='first_page_arrow' className='w-4 h-4'/></button>
                </li>}


            <li className='paginate'>
                <button onClick={prePage}>
                    <img src={left} alt='back' className='w-4 h-4'/>
                </button>
            </li>


            {pageNumbers.map(n=>{
                if(n < maxPageNumberLimit+1 && n > minPageNumberLimit){
                return(
                <li key={n} className={`paginate paginate-li flex justify-center items-center 
                ${n === currentPage ? "bg-[#C62024]" : "bg-[#F2AC24]"}`}>
                   <button onClick={()=>changePage(n)}>{n}</button>
                </li>);
                } else {
                    return null;
                }
            })}

            <li className='paginate'>
                <button href='#exercisesGif' onClick={nextPage}>
                    <img src={right} alt='back' className='w-4 h-4'/>
                </button>
            </li>

                {currentPage < nPage-6 &&<li key={"last_page"} className={`paginate paginate-li flex justify-center items-center 
                "bg-[#F2AC24]`}>
                   <button onClick={()=>{changePage(nPage); setMinPageNumberLimit(nPage-5); setMaxPageNumberLimit(nPage)}} >
                    <img src={last} alt='last_page_arrow' className='w-4 h-4'/></button>
                </li>}

        </ul>
    </div>    
    
    </div>

    </section>
  )
}

export default Exercises