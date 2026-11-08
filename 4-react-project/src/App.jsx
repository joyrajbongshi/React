
import { useState } from 'react'
import './App.css'
import Button from './components/button'
import Card from './components/Card'

function App() {
  
  const [count, setCount] = useState(0);

  function handleclick() {
    setCount(count + 1);
  }

  return (
    <div>

      <Button handleclick = {handleclick} text= "Click me"> 
        <h1>{count}</h1>
      </Button>
      {/* <Card name="Joy Rajbongshi" >

        <h1>Joy Rajbongshi</h1>
        <p>BSc in CSE</p>

      </Card> */}
     
    </div>
  )
}

export default App
