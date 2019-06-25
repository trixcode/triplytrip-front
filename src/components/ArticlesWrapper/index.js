import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Article from '../Article'
import ArticleAside from '../ArticleAside'
import './articlesWrapper.scss';

const ArticlesWrapper = (props) => {
  const { getArticlesByPageStart, articlePaginate } = props;
  const firstPage = 1;
  const [Initialpage, setPageClicked] = useState(firstPage);

  useEffect(() => {
    getArticlesByPageStart(Initialpage)
      window.scrollTo(0, 0)
  }, [Initialpage]);
  console.log(articlePaginate)
  return (
    <div className='articles-wrapper'>
      <div className='container'>
        <div className='articles-wrapper-main-content'>
          <div className='articles-wrapper-list'>
            {articlePaginate.map(articlePaginate => (
              <Article articlePaginate={articlePaginate}
                key={articlePaginate._id}
              />
            ))}
            <div className="pages-numbers">
              {[1, 2, 3, 4, 5, 6, 7].map(page => (
                <button
                  key={page}
                  value={page}
                  className="pages-numbers__button"
                  onClick={event => setPageClicked(event.target.value)}
                >
                  {page}
                </button>
              ))}
              <button
                className="pages-numbers__button"
                onClick={() => setPageClicked(Initialpage - (-1))}
              >
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