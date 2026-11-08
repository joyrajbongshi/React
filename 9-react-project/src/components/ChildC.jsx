import React, { useContext } from 'react'
import { UserContext } from '../App'

const ChildC = () => {

  const user = UserContext(UserContext); 
  return (
    <div>
        {user.name}
    </div>
  )
}

export default ChildC
