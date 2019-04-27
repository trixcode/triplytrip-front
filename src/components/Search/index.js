
import './search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel  } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
    return (
      <section className="search-container">
        <div className="search container">
          <form className="search-form">
            <input className="search-form__input-first" placeholder="Address, city or select suggestion category" />
            <input className="search-form__input-second" placeholder="Location"></input>
            <button className="search-form__button">search now</button>
          </form>
        </div>
      </section>
    )
}

export default Search;