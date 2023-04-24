import { Filter } from "../../components/Filter/Filter"
import { JobList } from "../../components/JobList/JobList"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import './Home.css'

export const Home = () => {
  return (
    <div className="home">
      <div className="searchBar">
        <SearchBar />
      </div>

      <div className="content">
        <Filter />
        <JobList />
      </div>
    </div>
  )
}
