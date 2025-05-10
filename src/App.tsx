import { useState } from 'react'
import Header from './components/Pages/Header'
import "./App.css"
import Hero from './components/Pages/Hero'
import About from './components/Pages/About'


function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
