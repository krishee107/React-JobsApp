import './SearchBar.css'

export const SearchBar = () => {
  return (
    <div className="header">
      <input type="text" name="search" id="search" placeholder='Title, companies, expertise or benefits' />
      <button>Search</button>
    </div>
  )
}
