import React, {useState} from 'react'

function ColorPicket() {

    const [color, setColor] = useState('#000000')

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }
  return (
  <div className='color-picker-container'>
        <h1>Color Picker</h1>
    <div className='color-display' style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
        <label htmlFor="">Select a Color</label>
        <input type="color" value={color} onChange={handleColorChange}/>
    </div>
  </div>
    )
}

export default ColorPicket