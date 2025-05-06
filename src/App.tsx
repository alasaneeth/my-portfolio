import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Button from 'react-bootstrap/Button';



function App() {
  const [count, setCount] = useState(0)
//text commit for github configration

  return (
    <>
      <h1 className = "text-3xl font-bold underline">
    Hello world!
  </h1>
    </>
  )
}

export default App
