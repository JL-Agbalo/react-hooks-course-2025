import React, {useState, useRef, useEffect} from 'react'

function UseingRef() {
    // let [number, setNumber] = useState(0)

    const inputRef1 = useRef(null) // Return an Object
    const inputRef2 = useRef(null) // Return an Object
    const inputRef3 = useRef(null) // Return an Object
    useEffect(() => {
        console.log("Component Render")
        // console.log(inputRef)

    }, )
    function handeClick1(){
        // inputRef.current = inputRef.current + 1
        inputRef1.current.focus()
        // console.log(inputRef)
        inputRef1.current.style.backgroundColor ="yellow"
        inputRef2.current.style.backgroundColor =""
        inputRef3.current.style.backgroundColor =""
    }
    function handeClick2(){
        // inputRef.current = inputRef.current + 1
        inputRef2.current.focus()
        // console.log(inputRef)
        inputRef1.current.style.backgroundColor =""

        inputRef2.current.style.backgroundColor ="yellow"
        inputRef3.current.style.backgroundColor =""

    }
    function handeClick3(){
        // inputRef.current = inputRef.current + 1
        inputRef3.current.focus()
        // console.log(inputRef)
        inputRef1.current.style.backgroundColor =""
        inputRef2.current.style.backgroundColor =""
        inputRef3.current.style.backgroundColor ="yellow"
    }
  return (
    <div>
        <button onClick={handeClick1}>
            Click Me 1!
        </button>
        <input type="text" ref={inputRef1} placeholder='Enter a Value' /><br />
        <button onClick={handeClick2}>
            Click Me 2!
        </button>
        <input type="text" ref={inputRef2} placeholder='Enter a Value' /><br />
        <button onClick={handeClick3}>
            Click Me 3!
        </button>
        <input type="text" ref={inputRef3} placeholder='Enter a Value' /><br />

    </div>
  )
}

export default UseingRef