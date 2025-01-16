import React, {useState, useEffect, useRef} from 'react'



function UseRefTutorial() {
const [name, setName] = useState("")
const prevName = useRef("")

useEffect(()=> {
    prevName.current = name
}, [name])
    return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <div> My name is {name} and it used to be {prevName.current}</div>
    </div>
  )
}

export default UseRefTutorial