
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Article from '../Article'
import ArticleAside from '../ArticleAside'
import './articlesWrapper.scss';

const ArticlesWrapper = () => {

  return (
    <div className='articles-wrapper'>
      <div className='container'>
        <div className='articles-wrapper-main-content'>
          <div className='articles-wrapper-list'>
            <Article />
            <Article />
            <Article />

            <div className="pages-numbers">
              {[1, 2, 3, 4, 5].map(key => (
                <button
                  key={key}
                  className="pages-numbers__button">
                  {key}
                </button>
              ))}
              <button className="pages-numbers__button">
                Next
                <FontAwesomeIcon
                  className='pages-numbers__button__icon'
                  icon={faAngleRight} />
              </button>
            </div>
          </div>
          <div className='articles-wrapper-aside'>
            <ArticleAside />
          </div>
        </div>

      </div>

    </div>
  )
}

export default ArticlesWrapper;