import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faFolder, faComments, faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import './article.scss';

const Article = (props) => {
  const { articlePaginate, history } = props;

  const pushToDetailArticle = () => {
    history.push(`/article/${articlePaginate._id}`);
  };

  return (
    <div
      className="article"
      onClick={pushToDetailArticle}
      role="presentation"
    >
      <div
        className="article-img-wrapper"
      >
        <div className="article-img__date">
          <h3
            className="article-img__date__day"
          >
            {moment(articlePaginate.createdDate).format('DD')}
          </h3>
          <p
            className="article-img__date__month"
          >
            {moment(articlePaginate.createdDate).format('MMM')}
          </p>
        </div>
        <img
          src={articlePaginate.mainImage}
          alt="holet"
          className="article__img"
        />
      </div>
      <div className="article-description">
        <h2 className="article-description__title">
          {articlePaginate.title}
        </h2>
        <div className="article-description-interactive">
          <div className="article-description-interactive__wrapper">
            <FontAwesomeIcon
              className="article-description-interactive__icon"
              icon={faUser}
            />
            <span className="article-description-interactive__name">
              Йохан Ларсен
            </span>
          </div>
          <div className="article-description-interactive__wrapper">
            <FontAwesomeIcon
              className="article-description-interactive__icon"
              icon={faFolder}
            />
            <span className="article-description-interactive__name">
              путешествие
            </span>
          </div>
          <div className="article-description-interactive__wrapper">
            <FontAwesomeIcon
              className="article-description-interactive__icon"
              icon={faComments}
            />
            <span className="article-description-interactive__name">
              0 комментариев
            </span>
          </div>
        </div>
        <span className="article-description__text">
          {parse(`${articlePaginate.extraDescription}`)}
        </span>
        <button
          type="button"
          className="article-description__button"
          onClick={pushToDetailArticle}
        >
          Подробнее
          <FontAwesomeIcon
            className="article-description__button__arrow"
            icon={faArrowRight}
          />
        </button>
      </div>
    </div>
  );
};

Article.propTypes = {
  articlePaginate: PropTypes.shape({
    extraDescription: PropTypes.string,
    title: PropTypes.string,
    mainImage: PropTypes.string,
    createDate: PropTypes.string,
  }).isRequired,
};

export default withRouter(Article);
