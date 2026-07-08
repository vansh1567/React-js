import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)

  const addValue = () => {
  if (counter < 20) {
    setCounter(counter + 1)
  } else {
    alert("Counter cannot be more than 20")
  }
}
  const DecValue = () => {
  if (counter > 0) {
    setCounter(counter - 1)
  } else {
    alert("Counter cannot be less than 0")
  }
}
  //let counter = 15

  // const addValue = () => {
  //   console.log ("value added", counter);
  //   counter = counter + 1
  // }

 

  return (
    <>
      <h1>Hello</h1>
      <h2>counter value: {counter} </h2>

      <button on onClick={addValue}>Add value</button>
      <br />
      <button onClick={DecValue}>decrease value</button>
    </>
  )
}

export default App
