import React, { useState, useEffect, useRef } from 'react';

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(()=> {
    // Focus on Input element
    inputRef.current.focus()
    },[])
    // Empty to Execute only Once

  return (
    <div>
        <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInput