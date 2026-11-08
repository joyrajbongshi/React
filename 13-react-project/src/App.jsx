import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)


  let val = useRef(0);

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("vlaue of val : ", val.current);
    setCount(count + 1);
  }

  // it runs on every render
  useEffect ( () => {
    console.log("Again render");
  })

  return (
    <div>
      <button onClick={handleIncrement}>
        Increment
      </button>

      <br />

      <div>
        Count : {count}
      </div>
    </div>
  )

}

export default App
