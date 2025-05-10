import { useState } from 'react'
import Header from './components/Pages/Header'
import "./App.css"
import Hero from './components/Pages/Hero'
import About from './components/Pages/About'
import Projects from './components/Pages/Projects'


function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
