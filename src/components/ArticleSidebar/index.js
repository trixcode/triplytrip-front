import './articleSidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SubscribeArticlesContainer from '../../containers/SubscribeArticles';
import React from 'react'

const ArticleSidebar = (props) => {
  return (
    <aside className='section-article-sidebar'>
      <div className='article-sidebar-search'>
        <input className='search' placeholder='search' />
        <FontAwesomeIcon className='search-icon' icon={faSearch} />
      </div>
      <div className='article-sidebar-categoies'>
        <div className='article-sidebar-title'>
          <div className='article-sidebar-title__box'></div>
          <div className='article-sidebar-title__boxSecond'></div>
          <h4 className='article-sidebar-title__name'>categoies</h4>
        </div>
        <ul className='article-sidebar-categories__item'>
          <li className='article-sidebar-categories__list'>
            <a href='#' className='article-sidebar-categories__link'>coffee</a>
          </li>
          <li className='article-sidebar-categories__list'>
            <a href='#' className='article-sidebar-categories__link'>news</a>
          </li>
          <li className='article-sidebar-categories__list'>
            <a href='#' className='article-sidebar-categories__link'>tips  tricks</a>
          </li>
          <li className='article-sidebar-categories__list'>
            <a href='#' className='article-sidebar-categories__link'>uncategorized</a>
          </li>
        </ul>
      </div>
      <div className='article-sidebar-latest'>
        <div className='article-sidebar-title'>
          <div className='article-sidebar-title__box'></div>
          <div className='article-sidebar-title__boxSecond'></div>
          <h4 className='article-sidebar-title__name'>latest news</h4>
        </div>
        <div className='article-sidebar-latest__news'>
          <img className='article-sidebar-latest__news--image' src='/static/latesNews.png' alt='' />
          <div className='article-sidebar-latest__news-text'>
            <a href='#' className='article-sidebar-latest__news-text--description'>
              15 restaurants in london and new york
              </a>
            <span className='article-sidebar-latest__news-text--date'>april 30, 2019</span>
          </div>
        </div>
        <div className='article-sidebar-latest__news'>
          <img className='article-sidebar-latest__news--image' src='/static/latesNews.png' alt='' />
          <div className='article-sidebar-latest__news-text'>
            <a href='#' className='article-sidebar-latest__news-text--description'>
              15 restaurants in london and new york
              </a>
            <span className='article-sidebar-latest__news-text--date'>april 30, 2019</span>
          </div>
        </div>
        <div className='article-sidebar-latest__news'>
          <img className='article-sidebar-latest__news--image' src='/static/latesNews.png' alt='' />
          <div className='article-sidebar-latest__news-text'>
            <a href='#' className='article-sidebar-latest__news-text--description'>
              15 restaurants in london and new york
              </a>
            <span className='article-sidebar-latest__news-text--date'>april 30, 2019</span>
          </div>
        </div>
      </div>
      <div className='article-sidebar-newsletter'>
        <div className='article-sidebar-title'>
          <div className='article-sidebar-title__box'></div>
          <div className='article-sidebar-title__boxSecond'></div>
          <h4 className='article-sidebar-title__name'>newsletter</h4>
        </div>
          <SubscribeArticlesContainer />
      </div>
    </aside>
  )
}

export default ArticleSidebar;