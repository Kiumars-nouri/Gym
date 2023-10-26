import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav.jsx"
import Home from "./components/Home.jsx"
import Team from "./components/Team.jsx"
import Footer from "./components/Footer.jsx"
import Exercises from "./components/Exercises.jsx"
import DailyCalorie from "./components/DailyCalorie.jsx"
import Bmi from "./components/Bmi.jsx"
import BurnedCalories from "./components/BurnedCalories.jsx"
import CalorieIntake from "./components/CalorieIntake.jsx"
import Membership from "./components/Membership.jsx"
import MembershipForm from "./components/MembershipForm.jsx"

const App = () => {
  return (
    <Router basename={"/Gym/"}>
    <div className='min-h-[100vh] bg-[#ecf0f1]'>

      <ScrollToTop />      
      <Nav />
    <Routes>
      <Route path='/' element={<Home />} />  
      <Route path='/Team' element={<Team />} /> 
      <Route path='/Exercises' element={<Exercises />} />
      <Route path='Daily' element={<DailyCalorie />} />
      <Route path='BMI' element={<Bmi />} />
      <Route path='Intake' element={<CalorieIntake />} />
      <Route path='Burned' element={<BurnedCalories />} />
      <Route path='/Membership' element={<Membership />} />  
      <Route path='/MembershipForm' element={<MembershipForm />} /> 
    </Routes>
      <Footer />
   
  
  </div>
  </Router>
  )
}

export default App