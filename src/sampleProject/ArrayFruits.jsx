import React from 'react'

function ArrayFruits() {
    const [foods, setFoods] = React.useState(["Apple", "Banana", 
        "Cherry", "Date", "Elderberry", "Fig", 
        "Grape", "Honeydew", "Jackfruit", 
        "Kiwi", "Lemon", "Mango", "Nectarine", 
        "Orange", "Papaya", "Quince", "Raspberry"])

    function handleAddFood() {
        const foodInput = document.getElementById('foodInput')
        const newFood = foodInput.value
        if (newFood === '') {
            alert('Please enter a food name')
            return
        }
        setFoods(f => [...f, newFood])
        foodInput.value = ''
    }

    function handleRemoveFood(index) {
        setFoods(f => f.filter((_, i) => i !== index))
                            //  ^ ingnored
    }
  return (
    <div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) => (
                <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
            ))}
        </ul>
        <div>
            <input type="text" id="foodInput" placeholder='Enter food name' />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    </div>
  )
}

export default ArrayFruits