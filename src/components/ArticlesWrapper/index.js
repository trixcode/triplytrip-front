import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Article from '../Article';
import ArticleAsideContainer from '../../containers/ArticleAside';
import './articlesWrapper.scss';

const ArticlesWrapper = (props) => {
  const { getArticlesByPageStart, articlePaginate } = props;
  const firstPage = 1;
  const [Initialpage, setPageClicked] = useState(firstPage);

  useEffect(() => {
    getArticlesByPageStart(Initialpage);
    window.scrollTo(0, 0);
  }, [Initialpage, getArticlesByPageStart]);
  return (
    <div className="articles-wrapper">
      <div className="container">
        <div className="articles-wrapper-main-content">
          <div className="articles-wrapper-list">
            {articlePaginate.map(paginateArticle => (
              <Article
                articlePaginate={paginateArticle}
                key={paginateArticle._id}
              />
            ))}
            <div className="pages-numbers">
              {[1, 2, 3, 4, 5, 6, 7].map(page => (
                <button
                  type="button"
                  key={page}
                  value={page}
                  className="pages-numbers__button"
                  onClick={event => setPageClicked(event.target.value)}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                className="pages-numbers__button"
                onClick={() => setPageClicked(Initialpage - (-1))}
              >
                Next
                <FontAwesomeIcon
                  className="pages-numbers__button__icon"
                  icon={faAngleRight}
                />
              </button>
            </div>
          </div>
          <div className="articles-wrapper-aside">
            <ArticleAsideContainer />
          </div>
        </div>
      </div>
    </div>
  );
};


ArticlesWrapper.propTypes = {
  articlePaginate: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
  })).isRequired,
  getArticlesByPageStart: PropTypes.func.isRequired,
};

export default ArticlesWrapper;
