import { useState } from "react"
import { Filter } from "../../components/Filter/Filter"
import { JobList } from "../../components/JobList/JobList"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import './Home.css'

export const Home = () => {
  const [cityFilter, setCityFilter] = useState(null)
  const [timeFilter, setTimeFilter] = useState(null)

  const handleTime = (time) => {
    console.log(time)
    setTimeFilter(time)
  }
  const handleCity = (city) => {
    setCityFilter(city)
    console.log(city)
  }

  return (
    <div className="home">
      <div className="searchBar">
        <SearchBar />
      </div>

      <div className="content">
        <Filter handleTime={handleTime} handleCity={handleCity} />
        <JobList cityfilter={cityFilter} timefilter={timeFilter} />
      </div>
    </div>
  )
}
