import './App.css'
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
    </div>
  )
}

export default App