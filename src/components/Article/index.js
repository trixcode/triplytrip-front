import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolder, faComments, faArrowRight, faSearch, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './article.scss'
const Article = (props) => {
  return (
    <div className='article'>
      <div className='article-img-wrapper'>
        <div className='article-img__date'>
          <h3
            className='article-img__date__day'>
            22
          </h3>
          <p
            className='article-img__date__month'>
            jun
          </p>
        </div>
        <img
          src='https://img4.badfon.ru/original/1920x1080/0/72/more-basseyny-otel-princesa.jpg'
          alt='holet'
          className='article__img' />
      </div>
      <div className='article-description'>
        <h2 className='article-description__title'>
          15 Restaurants in Bishkek and Almata
        </h2>
        <div className='article-description-interactive'>
          <div className='article-description-interactive__wrapper'>
            <FontAwesomeIcon
              className='article-description-interactive__icon'
              icon={faUser} />
            <span className='article-description-interactive__name'>
              johan larson
            </span>
          </div>
          <div className='article-description-interactive__wrapper'>
            <FontAwesomeIcon
              className='article-description-interactive__icon'
              icon={faFolder} />
            <span className='article-description-interactive__name'>
              travel
            </span>
          </div>
          <div className='article-description-interactive__wrapper'>
            <FontAwesomeIcon
              className='article-description-interactive__icon'
              icon={faComments} />
            <span className='article-description-interactive__name'>
              0 comments
            </span>
          </div>
        </div>
        <span className='article-description__text'>
          Proin urna augue, cursus ac erat id, sodales placerat ex. Cras ex massa,
          consectetur sed posuere vel, consequat ac libero. In at metus ut libero pharetra
          blandit id et felis. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia Curae; Nulla congue erat at metus malesuada dapibus.
        </span>
        <button className='article-description__button'>
          read more
          <FontAwesomeIcon
            className='article-description__button__arrow'
            icon={faArrowRight} />
        </button>
      </div>
    </div>
  )
}

export default Article;