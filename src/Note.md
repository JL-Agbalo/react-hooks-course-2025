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


import PropTypes from 'prop-types'

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export deault name;


// defaultProps = default values for props in the case they are not passed from the parent Components
// name: "Guest"

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isSTudent: alse,
}


// conditional rendering = allows you to control what gets rendered in your application based on certain condition
// (show, hide or chnage components)

render List
// fruits.sort((a,b) => a.name.localeCompare(b.name)) // Alphabetical
// fruits.sort((a,b) => b.name.localeCompare(a.name)) // Reverse Alphabetical
// fruits.sort((a,b) => a.name.localeCompare(b.calories)) // Numeric
// fruits.sort((a,b) => b.name.localeCompare(a.calories)) // Reverse Numberic

const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

// Click event = An interaction when a user clocks on a speciffic element
// We can respond to clicks by passing a callback to the onClick event handler

const handleClick = () => console.log("Clicked")
        ^ Function

return (<button onClick={handeClick}> Click me</button>)
                            ^ Callback

const handleClick2 =(name) => console.log(`Dont Click me + ${name}`)

return (<button onClick={() => handleClick2("Name")}> Click me </button>)

// Reac hook = Special function that allows functional components to use React features without writing class componenets (React v16.8)
// (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState() = A react hook that allows the creation of a stateful variable AND a setter function to update its value in the Virtual DOM [name, set name]

// onChange =event handler used primarily with form elements ex. <input> <textarea> <select> <radio>
// Triggers a function every time the value of the input changes 

// update function = A function passed as an argument to setState() useally ex. setYear(arrow function)
// Allow for safe updates based on the previous state used with multiple state updates and asynchronous functions
// Good practice to use updater functions

Continue https://www.youtube.com/watch?v=YxQlt3n1ZPA&list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ&index=12

// useCOntext() = React Hook that allows you to share values between multiple levels of components without passing props though each level



Jargon
- Platform (Web App)
- Integrate: Old to New Platform
- Features (Mga Need sa Platform)
- Scability
- Performance 
- Aviodingg bloaded code
- plugins
- fetchpriority= "high" slow mag load ung mga webpages
- lazy loading
- Loading optimization
- Theme pallete
- Scrolling interaction
- Micro interaction
- hero section
