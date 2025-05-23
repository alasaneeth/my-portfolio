import { useState } from 'react'
import Header from './components/Pages/Header'
import "./App.css"
import Hero from './components/Pages/Hero'
import About from './components/Pages/About'
import Projects from './components/Pages/Projects'
import TechincalSkills from './components/Pages/TechincalSkills'
import SoftSkills from './components/Pages/SoftSkills'
import Services from './components/Pages/Service'
import Footer from './components/Pages/Footer'


function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <TechincalSkills/>
      <SoftSkills/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
