import { Filter } from "../../components/Filter/Filter"
import { JobList } from "../../components/JobList/JobList"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import './Home.css'

export const Home = () => {
  return (
    <div className="home">
      <header>
        <div
          className="title"
        ><span>Github</span> Jobs</div>
        <SearchBar />
      </header>

      <div className="content">
        <Filter />
        <JobList />
      </div>
    </div>
  )
}
