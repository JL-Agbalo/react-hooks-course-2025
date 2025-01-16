import React from 'react'
import ComponentC from './ComponentC'

function ComponentB() {
  return (
    <div className='box' style={{ border: '1px solid black', padding: '25px' }}>
        <h1>Component B</h1>
        
        <ComponentC/>
    </div>
  )
}

export default ComponentB