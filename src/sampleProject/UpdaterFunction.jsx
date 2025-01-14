import React from 'react'

function UpdaterFunction() {
  const [count, setCount] = React.useState(0)

  function increment() {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // Look like this if multiple setCount
    // setCount(0 + 1)
    // setCount(0 + 1)
    // setCount(0 + 1)
    // Uses the CURRENT state to calculate the Next state
    // set functions do not trigger an update
    // React batches toger  all set functions and then triggers an update
    // NEXT satte becomes the CURRENT state after an update


    // Takes the PENDING state to calculate Next state
    // React puts your updater function i a queue (waiting in line)
    // During the next render, it will call them in the same order
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  function reset() {
    setCount(0)
  }

    return (
    <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UpdaterFunction