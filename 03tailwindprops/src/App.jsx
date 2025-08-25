import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // we understand that how we can use different component in the card and will display in the console
  // let myObj = {
  //   username : "muazam",
  //   age : 21
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-md mb-4'>Tailwind test</h1>
      <Card  username={"muazam"} price ={"$333"}/>
      <Card username={"khattak"} price = {"$200"}/>
    </>
  )
}

export default App
