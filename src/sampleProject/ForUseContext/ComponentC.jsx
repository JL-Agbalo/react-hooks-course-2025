import React, {useContext} from 'react'
import { UserContext } from './ComponentA'

import ComponentD from './ComponentD'
function ComponentC() {
  const user =useContext(UserContext)
  return (
    <div className='box' style={{ border: '1px solid black', padding: '25px' }}>
        <h1>Component C </h1>
        <h2>{`Hello Again ${user}`}</h2>
        <ComponentD/>
    </div>
  )
}

export default ComponentC