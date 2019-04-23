
import './search.scss';

const Search = (props) => {
    return (
      <div class="search-container">
        <div class="search container">
          <form class="search-form">
            <input class="search__form--input-first" placeholder="Address, city or select suggestion category"></input>
            <input class="search__form--input-second" placeholder="Location"></input>
            <button class="search__form--button">search now</button>
          </form>
        </div>
      </div>
    )
}

export default Search;