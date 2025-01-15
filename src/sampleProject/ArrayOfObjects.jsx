import React from 'react'

function ArrayOfObjects() {

    const [cars, setCars] = React.useState([])
    const [carYear, setCarYear] = React.useState(new Date().getFullYear())
    const [carMake, setCarMake] = React.useState('')
    const [carModel, setCarModel] = React.useState('')

    function handleAddCar() {
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};
        setCars(c => [...c, newCar])
        setCarYear(new Date().getFullYear())
        setCarMake('')
        setCarModel('')    
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index))
    }

    function handleYearChange(e) {
        setCarYear(e.target.value)
    }

    function handleMakeChange(e) {
        setCarMake(e.target.value)
    }

    function handleModelChange(e) {
        setCarModel(e.target.value)
    }

    console.log(cars)

  return (
    <div>
        <h2>List of Card Objects</h2>
        <ul>
            <li>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </li>
        </ul>
        <input type="number" id="inputYear" value={carYear} onChange={handleYearChange} placeholder='Enter CarYear' />
        <input type="text" id="inputMake" value={carMake} onChange={handleMakeChange} placeholder='Enter Car Make'/>
        <input type="text" id="inputModel" value={carModel} onChange={handleModelChange} placeholder='Enter Car Model'/>
        <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default ArrayOfObjects