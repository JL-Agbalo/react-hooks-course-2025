import React, {useState, createContext} from 'react'
export const UserContext = createContext()

import ComponentB from './Componentb'

function ComponentA() {
    const [user, setUser] = useState("broCode")
  return (
    <div className='box' style={{ border: '1px solid black', padding: '25px' }}>
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value ={user}>
            <ComponentB/>
        </UserContext.Provider>
    </div>
  )
}

export default ComponentA