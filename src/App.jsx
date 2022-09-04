import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import Index from './pages'
import HeroImage from './assets/react.svg'
import Errand from './components/common/Header'
import Shop from "./pages/Shop"
import Login from "./pages/Login"
import Dashboard from "./pages/dashboard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/Shop" element={<Shop/>} />
      <Route path="/Login"element={<Login/>} />
      <Route path="/dashboard"element={<Dashboard/>} />

    </Routes>
    </BrowserRouter>

  )

}

export default App
