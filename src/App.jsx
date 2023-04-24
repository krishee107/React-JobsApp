import './App.css'
import { Filter } from './components/Filter/Filter'
import { JobList } from './components/JobList/JobList'
import { SearchBar } from "./components/SearchBar/SearchBar"

const App = () => {
  return (
    <div className="app ">
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

export default App