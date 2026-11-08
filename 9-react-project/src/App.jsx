import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

//step 1 : create context
const UserContext = createContext();
//step 2 : wrap all the child inside a provider
//step 3 : pass value    
//step 4 : consum to inside the consumer

function App() {
  
  const [user, setUser] = useState({name : "Joy"});
  
  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>  
    </div>
  )
  
}

export default App
export {UserContext}
