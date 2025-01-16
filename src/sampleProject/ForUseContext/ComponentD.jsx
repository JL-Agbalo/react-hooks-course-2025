import React from 'react'

function ComponentD(props) {
  return (
    <div className='box' style={{ border: '1px solid black', padding: '25px' }}>
        <h1>Component D</h1>
        <h2>{`Bye ${props.user}`}</h2>
    </div>
  )
}

export default ComponentD