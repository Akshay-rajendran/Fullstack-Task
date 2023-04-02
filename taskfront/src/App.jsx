import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtask from './components/Addtask'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import "../addtask.css"
import Alltask from './components/Alltask'
import Edit from './components/Edit'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Addtask/>}/>
      <Route path="alltask" element={<Alltask/>}/>
      <Route path="edit" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
