import {withRouter} from 'react-router'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faHamburger, faMapMarkedAlt, faCoffee, faBeer } from '@fortawesome/free-solid-svg-icons';
import './homeCategory.scss';

const HomeCategory = (props) => {

  const {history} = props
  const pushToCategories = (category) => {
    history.push(`/placesCategory?category=${category}`)
  }
  const pushToPlaces = (category) => {
    history.push(`/placesCategory`)
  }
  return (

    <section className="category-wrapper">
      <div className="container">
        <div className=' category-container'>
          <div className="category-block " onClick={() => pushToCategories('hotel')}>
            <p className="category-block__icon__wrapper category__icon_hotel">
              {<FontAwesomeIcon
                className="category__icon"
                icon={faHotel}
              />}
            </p>
            <span className="category-block__name">Отель</span>
          </div>
          <div className="category-block" onClick={() => pushToCategories('restaurant')}>
            <p className="category-block__icon__wrapper category__icon_hamburger">
              {<FontAwesomeIcon
                className="category__icon"
                icon={faHamburger}
              />}
            </p>
            <span className="category-block__name" >Ресторан</span>
          </div>
          <div className="category-block" onClick={pushToPlaces}>
            <p className="category-block__icon__wrapper category__icon_map">
              {<FontAwesomeIcon
                className="category__icon"
                icon={faMapMarkedAlt}
              />}
            </p>
            <span className="category-block__name">Заведения</span>
          </div>
          <div className="category-block" onClick={() => pushToCategories('cafe')}>
            <p className="category-block__icon__wrapper category__icon_coffee">
              {<FontAwesomeIcon
                className="category__icon"
                icon={faCoffee}
              />}
            </p>
            <span className="category-block__name">Кафе</span>
          </div>
          <div className="category-block" onClick={() => pushToCategories('night club')}>
            <p className="category-block__icon__wrapper category__icon_beer">
              {<FontAwesomeIcon
                className="category__icon"
                icon={faBeer}
              />}
            </p>
            <span className="category-block__name last_name">Ночные Клубы</span>
          </div>
        </div>
      </div>
    </section>

  )
}

export default withRouter(HomeCategory);