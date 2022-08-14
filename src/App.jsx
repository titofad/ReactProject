import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Index from './pages'
import HeroImage from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <Index/>
    </div>
    

  )

}

export default App
