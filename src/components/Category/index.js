
import './category.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHotel, faHamburger, faMapMarkedAlt, faCoffee, faBeer } from '@fortawesome/free-solid-svg-icons';

const Category = (props) => {
  return (

    <section className="category-wrapper">
      <div className="container-Tynai category">
        <div className="category-block">
          {<FontAwesomeIcon
            className='icon-category hotel-icon'
            icon={faHotel}
          />}
          <span className="category-block__name">Hotel</span>
        </div>
        <div className="category-block">
          {<FontAwesomeIcon
            className='icon-category hamburger-icon'
            icon={faHamburger}
          />}
          <span className="category-block__name">Dinner</span>
        </div>
        <div className="category-block">
          {<FontAwesomeIcon
            className='icon-category map-icon'
            icon={faMapMarkedAlt}
          />}
          <span className="category-block__name">Destination</span>
        </div>
        <div className="category-block">
          {<FontAwesomeIcon
            className='icon-category coffee-icon'
            icon={faCoffee}
          />}
          <span className="category-block__name">Coffee</span>
        </div>
        <div className="category-block">
          {<FontAwesomeIcon
            className='icon-category beer-icon'
            icon={faBeer}
          />}
          <span className="category-block__name last_name">Club and Bear</span>
        </div>
      </div>
    </section>

  )
}

export default Category;