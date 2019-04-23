
import './search.scss';

const Search = (props) => {
    return (
      <div class="search-container">
        <div class="search container">
          <form class="search-form">
            <input class="search-form__input-first" placeholder="Address, city or select suggestion category"></input>
            <input class="search-form__input-second" placeholder="Location"></input>
            <button class="search-form__button">search now</button>
          </form>
        </div>
      </div>
    )
}

export default Search;