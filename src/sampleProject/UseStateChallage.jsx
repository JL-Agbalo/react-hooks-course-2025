import React, {useState} from 'react'

function UseStateChallage() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const themeStyles = {
        backgroundColor: isDarkMode ? '#333' : '#FFF',
        color: isDarkMode ? '#FFF' : '#333',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      };

    function toggleDarkMode(){
        setIsDarkMode((prev) => !prev)
    }
  return (
    <div style={themeStyles}>
        <h1 >{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
        <button onClick={toggleDarkMode}>Toggle Theme</button>
    </div>
  )
}

export default UseStateChallage