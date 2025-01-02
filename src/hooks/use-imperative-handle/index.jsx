import React, { useRef, useImperativeHandle, forwardRef } from "react";

// Parent Component
export const ImperativeHandleExample = () => {
  const inputRef = useRef();

  return (
    <div>
   
    </div>
  );
};

// Child Component
const CustomInput = forwardRef((props, ref) => {
 
  return <input ref={inputRef} type="text" placeholder="Type something..." />;
});
