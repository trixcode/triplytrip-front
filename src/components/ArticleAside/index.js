
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './articleAside.scss'


const ArticleAside = (props) => {
  return (
    <aside className='article-aside'>

      <label className='article-aside__label'>
        <input
          className='article-aside__input article-aside__input_curve_radius '
          placeholder='Search' />
        <FontAwesomeIcon
          className='article-aside__input__icon'
          icon={faSearch} />
      </label>

      <div className='article-aside-box'>
        <div className='article-aside-box__title'>
          <div className='article-aside-box__title__trip' />
          <h3 className='article-aside-box__title__text'>
            Categories
          </h3>
        </div>

        <ul className='article-aside-box__list'>
            <a 
              className='article-aside-box__link'>
              coffee
            </a>
            <a 
              className='article-aside-box__link'>
              news
            </a>
            <a 
              className='article-aside-box__link'>
              tips & tricks
            </a>
            <a 
              className='article-aside-box__link'>
              uncategorized
            </a>
        </ul>
      </div>
      <div className='article-aside-box'>

        <div className='article-aside-box__title'>
          <div className='article-aside-box__title__trip' />
          <h3 className='article-aside-box__title__text'>
            Latest News
          </h3>
        </div>
        <div className='article-aside-box__news'>
          <div className='article-aside-box__news__img__wrapper'>
            <img
              src='https://img3.goodfon.com/original/1440x900/2/29/cafe-terrace-old-fashioned.jpg'
              className='article-aside-box__news__img' />
          </div>
          <div className='article-aside-box__news__description'>
            <h4 className='article-aside-box__news__description__text'>
              15 Restaurants in Bishkek and Almata
            </h4>
            <span className='article-aside-box__news__description__date'>
              April 11, 2018
            </span>
          </div>
        </div>
        <div className='article-aside-box__news'>
          <div className='article-aside-box__news__img__wrapper'>
            <img
              src='https://img3.goodfon.com/original/1440x900/2/29/cafe-terrace-old-fashioned.jpg'
              className='article-aside-box__news__img' />
          </div>
          <div className='article-aside-box__news__description'>
            <h4 className='article-aside-box__news__description__text'>
              15 Restaurants in Bishkek and Almata
            </h4>
            <span className='article-aside-box__news__description__date'>
              April 11, 2018
            </span>
          </div>
        </div>
        <div className='article-aside-box__news'>
          <div className='article-aside-box__news__img__wrapper'>
            <img
              src='https://img3.goodfon.com/original/1440x900/2/29/cafe-terrace-old-fashioned.jpg'
              className='article-aside-box__news__img' />
          </div>
          <div className='article-aside-box__news__description'>
            <h4 className='article-aside-box__news__description__text'>
              15 Restaurants in Bishkek and Almata
            </h4>
            <span className='article-aside-box__news__description__date'>
              April 11, 2018
            </span>
          </div>
        </div>
      
      </div>
      <div className='article-aside-box'>
        <div className='article-aside-box__title'>
          <div className='article-aside-box__title__trip' />
          <h3 className='article-aside-box__title__text'>
            Newsletter
          </h3>
        </div>
        <span className='article-aside-box__newsletter__text'>
          Subscribe us and never miss our new articles
        </span>
        <label className='article-aside__label'>
          <input
            placeholder='Email Address'
            className='article-aside__input' />
          <FontAwesomeIcon
            className='article-aside__input__icon'
            icon={faPaperPlane} />
        </label>
      </div>
      <div className='article-aside-box__ad'>
        <img
          src='https://img1.goodfon.com/original/640x960/b/3d/sinister-2-clown-panic.jpg'
          className='article-aside-box__ad__link' />
      </div>
    </aside>
  )
}

export default ArticleAside;