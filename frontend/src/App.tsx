import { useState } from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import './App.css'
import Home from './home'
import Login from './login'
import Subscribe from './subscribe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
   <Routes>
   <Route path="/home"  element={<Home   />} />
    <Route  path='/login' element={<Login/>} />
    <Route  path='/subscribe' element={<Subscribe/>} />
      </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
