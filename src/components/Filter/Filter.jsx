import './Filter.css'

export const Filter = () => {
  return (
    <div className="filter">
      <div className="jornada">
        <label>
          <input type="checkbox" name="fulltime" id="fulltime" />
          Full  time
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
          <input type="radio" name="radio" className="city" value="london" />
          London
        </label>
        <label>
          <input type="radio" name="radio" className="city" value="amsterdam" />
          Amsterdam
        </label>
        <label>
          <input type="radio" name="radio" className="city" value="new york" />
          New York
        </label>
        <label>
          <input type="radio" name="radio" className="city" value="berlin" />
          Berlin
        </label>

      </div>
    </div>
  )
}
