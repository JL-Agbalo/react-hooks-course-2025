import { createContext, useState, useContext } from "react";

export const GlobalStateContext = createContext(null);

export const ContextExample = () => {
    const [isToggle, setIsToggle] = useState(false);
    return (
        <div>
        <h1>Parent Component</h1>
        <GlobalStateContext.Provider value={{setIsToggle, isToggle}} >
            <ChildToggle />
            <ChildDisplay /> 
        </GlobalStateContext.Provider>
        
        </div>
    )
};

const ChildToggle = () => {
    const {setIsToggle} = useContext(GlobalStateContext)
    return(
        <div>
            <button onClick={ () => setIsToggle((prev) => !prev)}>Toggle State</button>
        </div>
    )
};

// Child Component to Display State
const ChildDisplay = () => {
    const {isToggle} = useContext(GlobalStateContext)
  return (
    <div>
        <p>Current State: {isToggle ? "On" : "Off"}</p>
    </div>
  )
};

export default ContextExample;
