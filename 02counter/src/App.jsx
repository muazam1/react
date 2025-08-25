import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] =  useState(0)
  //let counter = 0;
  
  const addValue = ()=>{
    // console.log("clicked" , counter);
    //counter = counter + 1

    // now to add logic for that counter cannot go to negative and also not go up than the 30
    if (counter < 30){
        setCounter(counter + 1) 
      };
  }
  const removeValue = ()=>{
    if (counter > 0){
      setCounter (counter - 1)
    } 
  }


  return (
    <>
      
      <h1>learing react is fun</h1>
      <h2>counter value: {counter}</h2>


      <button
        onClick={addValue}> Add Value {counter}</button><br/>
      <button
          onClick={removeValue}>Remove value {counter}</button>
          <footer>just for fun we add counter here as well {counter}</footer>
    </>

  )
}

export default App
