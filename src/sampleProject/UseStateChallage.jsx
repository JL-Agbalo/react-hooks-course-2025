import React, {useState} from 'react'

function UseStateChallage() {
    const [count, setCount] = useState(0)

    function increment(){
        setCount(c => c + 1)
    }

    function decrement(){
        setCount(c => c - 1)
    }

    function reset(){
        setCount(0)
    }
  return (
    <div>
        <h1>Increment</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseStateChallage