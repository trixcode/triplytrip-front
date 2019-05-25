
import './search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
  return (
    <section className="search-wrapper">
      <div className="container">
        <form className="search-form">
          <div className="search-form__places">
            <input className="search-form__input" placeholder={"Address, city or select suggestion category"}/>
            {<FontAwesomeIcon
              className="search-form__icon-search"
              icon={faSearch}
            />}
          </div>
          <div className="search-form__location">
            <input className="search-form__input" placeholder="Location" />
            {<FontAwesomeIcon
            className='search-form__icon-map'
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