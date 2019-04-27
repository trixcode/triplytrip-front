
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faHamburger, faMapMarkedAlt, faCoffee, faBeer } from '@fortawesome/free-solid-svg-icons';
import './homeCategory.scss';

const HomeCategory = (props) => {
  return (

    <section className="category-wrapper">
      <div className='container category-container'>
        <div className="category-block">
          {<FontAwesomeIcon
            className="category__icon category__icon_hotel"
            icon={faHotel}
          />}
          <span className="category-block__name">Hotel</span>
        </div>
        <div className="category-block">
          {<FontAwesomeIcon
            className="category__icon category__icon_hamburger"
            icon={faHamburger}
          />}
          <span className="category-block__name">Dinner</span>
        </div>
        <div className="category-block">
          {<FontAwesomeIcon
            className="category__icon category__icon_map"
            icon={faMapMarkedAlt}
          />}
          <span className="category-block__name">Destination</span>
        </div>
        <div className="category-block">
          {<FontAwesomeIcon
            className="category__icon category__icon_coffee"
            icon={faCoffee}
          />}
          <span className="category-block__name">Coffee</span>
        </div>
        <div className="category-block">
          {<FontAwesomeIcon
            className="category__icon category__icon_beer"
            icon={faBeer}
          />}
          <span className="category-block__name last_name">Club and Bear</span>
        </div>
      </div>

    </section>

  )
}

export default HomeCategory;