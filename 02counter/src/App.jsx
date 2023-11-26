import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() { 

let [counter,setCounter] = useState(5)

const addValue = ()=> {
  let updatedCounter = counter + 1
  setCounter(updatedCounter)
}
const minusValue = ()=> {  
  let updatedCounter = counter - 1
  if(updatedCounter <= 0){
    alert("cannot decrease below once")
  }else{
  setCounter(updatedCounter)
  }
}

  return (
    <>
      <div>
        <h1>Feroz coding</h1>
        <p> value: {counter}</p>
        <button onClick={addValue}>Increase value</button><br />
        <button onClick={minusValue}>Decrease value</button>
        <p>value:{counter}</p>
      </div>
    </>
  )
}

export default App
