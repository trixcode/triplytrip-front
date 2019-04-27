
import './search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
  return (
    <section className="search-container">
      <div className="search container">
        <form className="search-form">
          <div className="search-form__input">
            <input className="search-form__input-first" placeholder="Address, city or select suggestion category" />
            {<FontAwesomeIcon
              className='search-icon'
              icon={faSearch}
            />}
          </div>
          <div className="search-form__input">
            <input className="search-form__input-second" placeholder="Location" />
            {<FontAwesomeIcon
            className='map'
            icon={faMapMarkerAlt}
          />}
          </div>
          <button className="search-form__button">search now</button>
        </form>
      </div>
    </section>
  )
}

export default Search;