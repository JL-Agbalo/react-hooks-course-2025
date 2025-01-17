import { useEffect, useRef, useState } from "react";

export const RefExample = () => {
const inputRef = useRef(null);

const onClick = () => {
  inputRef.current.value = "Lenard"
}

useEffect(() => {
  console.log("Page Rerendered");
});

  return (
  <div>
    <h1>UseRef Example</h1>
    <input ref={inputRef} type="text" />
    <button onClick={onClick}>Get Value</button>
  </div>
  );
};
