// useEfffect (function, [dependencies])

// 1. useEffect(() => {} - Runs after every re-render
// 2. useEffect(() => {}, []) - Runs only once after the initial render
// 3. useEffect(() => {}, [dependencies]) - Runs after every re-render if the dependencies have changed
 
// How to Style React
// 1. External
// 2. Modules
// 3. Inline


1. External Index.css
.button{
    background-color: #4CAF50;
    color: #fff;
    padding: 10px;
    border: none
    cursor: pointer;
}


2. Module
Module has an automatic naming convertion in class
> Button 
- button.jsx
- button.module.css 

3. Inline
Button.jsx

const styles = {.button{
    background-color: #4CAF50;
    color: #fff;
    padding: 10px;
    border: none
    cursor: pointer;
}
}

// props = read-only properties that are shared between components.
// A parent component can send data to a child component
// <Component key =value />


// propTypes = a mechanisim that ensures that the passed value is the correct datatype
// age:PropTypes.number

