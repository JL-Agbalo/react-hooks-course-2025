import React, {useState} from 'react'

function CarModel() {
    const [car, setCar] = useState({
        year: 2020, 
        make: 'Toyota', 
        model: 'Corolla'});

    const onChangeYear = (e) => {
        setCar(c => ({...c, year: e.target.value}))
    }
    const onChangeMake = (e) => {
        setCar(c => ({...c, make: e.target.value}))
    }
    const onChangeModel = (e) => {
        setCar(c => ({...c, model: e.target.value}))
    }

return (
    <div>
        <div>
        <h1>CarModel</h1>
        <p>{car.year}</p>
        <p>{car.make}</p>
        <p>{car.model}</p>
        </div>
        <div>
        <input type="number" onChange={onChangeYear} value={car.year} />
        <input type="text" onChange={onChangeMake} value={car.make} />
        <input type="text" onChange={onChangeModel} value={car.model} />
        </div>
    </div>
  )
}

export default CarModel