import { useState } from 'react'
import './App.css'
import Home from './Components/Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full font-poppins bg-white text-gray-800 dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300'>
        <Home />
      </div>
    </>
  )
}

export default App
