import React, {useState} from 'react'

import ComponentB from './Componentb'

function ComponentA() {
    const [user, setUser] = useState("broCode")
  return (
    <div className='box' style={{ border: '1px solid black', padding: '25px' }}>
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <ComponentB user={user}/>
    </div>
  )
}

export default ComponentA