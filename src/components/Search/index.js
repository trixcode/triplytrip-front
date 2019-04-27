
import './search.scss';

const Search = (props) => {
    return (
      <div className="search-container">
        <div className="search container">
          <form className="search-form">
            <input className="search-form__input-first" placeholder="Address, city or select suggestion category"></input>
            <input className="search-form__input-second" placeholder="Location"></input>
            <button className="search-form__button">search now</button>
          </form>
        </div>
      </div>
    )
}

export default Search;