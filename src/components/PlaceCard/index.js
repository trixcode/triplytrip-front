import { withRouter } from 'react-router'
import { Fragment } from 'react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMobileAlt, faGlobeAmericas, faStar, faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

import './PlaceCard.scss';

const PlaceCard = props => {

  const { place, history } = props;

  const pushToDetail = () => {
    history.push(`/detail/${place.id}`)
  }

  const like = () => {
    console.log('liked!')
  }

  return (
    <div className='place-card-container'>
        <div onClick={pushToDetail}>
          <div className='place-card-image-wrapper'>
            <img
              src={place.mainImage ? place.mainImage : "https://cdn3.wpbeginner.com/wp-content/uploads/2018/03/httperrorwpuploads-1.png"}
              alt='place'
              className='place__card__images' />
            <div className='place-card-avatar-wrapper'>
              <img
                src='https://img5.goodfon.com/wallpaper/big/0/de/devushka-ulybka-vzgliad-glaza-vesnushki-veronika-vonka-roma.jpg'
                alt='avatar'
                className='place-card__avatar' />
            </div>
          </div>
          <div className="place-card__info-wrapper">
            <h4
              className='place-card__name'>
              {place.name}
            </h4>
            <span
              className='place-card__price place-card__text_grey'>
              {place.price} сом
      </span>
            <div className='place-card__rates'>
              {[1, 2, 3, 4, 5].map(iconIndex => (
                <FontAwesomeIcon
                  key={iconIndex}
                  style={{ color: iconIndex <= place.rating && '#ffba00' }}
                  className='rate__star__icon'
                  icon={faStar} />)
              )}
            </div>
            <div
              className='place-card-addres place-card__text_grey'>
              <FontAwesomeIcon
                className='place-card__icon'
                icon={faMapMarkerAlt} />
              <span
                className='place-card__info location'>
                {place.address}
              </span>
            </div>
            <div
              className='place-card-site place-card__text_grey'>
              <FontAwesomeIcon
                className='place-card__icon'
                icon={faGlobeAmericas} />
              <a
                href={place.email}
                className='place-card__info place-card__text_grey'>
                {place.email}
              </a>
            </div>
            <div
              className='place-card__phone__number'>
              <FontAwesomeIcon
                className='place-card__icon'
                icon={faMobileAlt} />
              <span className='place-card__info place-card__text_grey'>
                +{place.phone}
              </span>
            </div>
          </div>
        </div>
      <div className='place-card-button-wrapper'>
        <button
          className='place-card__button place-card__button_detail'>
          View Detail
        </button>
        <button
          className='place-card__button'>
          <FontAwesomeIcon
            className='card__button__icon'
            icon={faMapMarkerAlt} />
        </button>
        <button
          className='place-card__button'>
          <FontAwesomeIcon
            className='card__button__icon'
            icon={faExchangeAlt} />
        </button>
        <button
          className='like-button' onClick={like}>
          <FontAwesomeIcon
            className='card__button__icon'
            icon={faHeart} />
        </button>
      </div>
    </div>
  )
}

export default withRouter(PlaceCard)