import { useState } from 'react'
import './App.css'
import Home from './Components/Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full font-poppins'>
        <Home />
      </div>
    </>
  )
}

export default App
