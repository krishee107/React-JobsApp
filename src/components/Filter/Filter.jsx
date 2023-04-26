import { useState } from 'react'
import './Filter.css'

export const Filter = ({ handleCity, handleTime }) => {
  const [time, setTime] = useState(null)
  const [city, setCity] = useState(null)

  const handleTimeChange = (event) => {
    const time = event.target.value
    setTime(time)
    handleTime(time)
  }

  const handleCityChange = (event) => {
    const city = event.target.value
    setCity(city)
    handleCity(city)
  }

  return (
    <div className="filter">
      <div className="jornada">
        <label>
          <input type="radio" name="time" onChange={handleTimeChange} value="fullTime" />
          Full  time
        </label>
        <label>
          <input type="radio" name="time" onChange={handleTimeChange} value="partTime" />
          Part  time
        </label>
        <label>
          <input type="radio" name="time" onChange={handleTimeChange} value="false" />
          Sin definir
        </label>
      </div>

      <div className="location">
        <h3 className='location_title'>LOCATION</h3>
        <label>
          <i className="fa-solid fa-earth-americas"></i>
          <input type="text" name="location" id="location" placeholder='City, state, zip code or country ' />
        </label>
      </div>

      <div className="cityList">
        <label>
          <input type="radio" name="radio" onChange={handleCityChange} className="city" value="London" />
          London
        </label>
        <label>
          <input type="radio" name="radio" onChange={handleCityChange} className="city" value="Amsterdam" />
          Amsterdam
        </label>
        <label>
          <input type="radio" name="radio" onChange={handleCityChange} className="city" value="NewYork" />
          New York
        </label>
        <label>
          <input type="radio" name="radio" onChange={handleCityChange} className="city" value="Berlin" />
          Berlin
        </label>
        <label>
          <input type="radio" name="radio" onChange={handleCityChange} className="city" value="Barcelona" />
          Barcelona
        </label>
        <label>
          <input type="radio" name="radio" onChange={handleCityChange} className="city" value="false" />
          Sin definir
        </label>

      </div>
    </div>
  )
}
