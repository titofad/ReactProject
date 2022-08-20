import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import Index from './pages'
import HeroImage from './assets/react.svg'
import Errand from './components/common/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/shop" element={<Index/>} />

    </Routes>
    </BrowserRouter>

  )

}

export default App
