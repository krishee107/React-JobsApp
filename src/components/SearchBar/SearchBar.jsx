import './SearchBar.css'

export const SearchBar = () => {
  return (
    <div className="header">
      <div className='inputGroup'>
        <input type="text" name="search" id="search" placeholder='Title, companies, expertise or benefits' />
        <i className="fa-solid fa-suitcase"></i>
      </div>
      <button>Search</button>
    </div>
  )
}
