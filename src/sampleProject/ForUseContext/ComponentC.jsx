import React from 'react'
import ComponentD from './ComponentD'
function ComponentC(props) {
  return (
    <div className='box' style={{ border: '1px solid black', padding: '25px' }}>
        <h1>Component C </h1>
        <ComponentD user={props.user} />
    </div>
  )
}

export default ComponentC