import React, {useState} from 'react'

export const ChangeColorBackground = () => {
    const backgroundColor = ["red", "blue", "green", "yellow", "purple"];
    const [color, setColor] = useState("black");

    const changeColor = () => {
        const newColor = backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
        setColor(newColor);
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    return (
    <div style={{backgroundColor: color, height: "100vh", transition: "background-color 0.5s ease"}}>
    <h1>Change Color Background</h1>
    <select onChange={handleColorChange} value={color} style={{padding: "10px", fontSize: "16px"}}>
        {backgroundColor.map((color) => (
            <option key={color} value={color}>{color}</option>
        ))}
    </select>
        <button
        onClick={changeColor}
        > Change Color Randomly</button>
      </div>
    );
}