import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './articleAside.scss';


const ArticleAside = (props) => {
  const { articlePaginate } = props;
  return (
    <aside className="article-aside">

      <label htmlFor="search" className="article-aside__label">
        <input
          id="search"
          className="article-aside__input article-aside__input_curve_radius "
          placeholder="Поиск"
        />
        <button type="submit" className="article-aside__input__button">
          <FontAwesomeIcon
            className="article-aside__input__icon"
            icon={faSearch}
          />
        </button>
      </label>
      <div className="article-aside-box">
        <div className="article-aside-box__title">
          <div className="article-aside-box__title__trip" />
          <h3 className="article-aside-box__title__text">
            Категории
          </h3>
        </div>
        <ul className="article-aside-box__list">
          <a
            href="/"
            className="article-aside-box__link"
          >
            Кафе
          </a>
          <a
            href="/"
            className="article-aside-box__link"
          >
            Новости
          </a>
          <a
            href="/"
            className="article-aside-box__link"
          >
            Советы и хитрости
          </a>
          <a
            href="/"
            className="article-aside-box__link"
          >
            Безкатегории
          </a>
        </ul>
      </div>
      <div className="article-aside-box">
        <div className="article-aside-box__title">
          <div className="article-aside-box__title__trip" />
          <h3 className="article-aside-box__title__text">
            Последнии Новости
          </h3>
        </div>
        <div className="article-aside-box__news">
          {articlePaginate.map(paginateArticle => (
            <div className="article-aside-box__wrapper" key={paginateArticle._id}>
              <div className="article-aside-box__news__img__wrapper">
                <img
                  alt="cafe"
                  src={paginateArticle.mainImage}
                  className="article-aside-box__news__img"
                />
              </div>
              <div className="article-aside-box__news__description">
                <h4 className="article-aside-box__news__description__text">
                  {paginateArticle.title}

                </h4>
                <span className="article-aside-box__news__description__date">
                  {moment(paginateArticle.createdDate).format('MMM Do YY')}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className="article-aside-box">
        <div className="article-aside-box__title">
          <div className="article-aside-box__title__trip" />
          <h3 className="article-aside-box__title__text">
            Новостная рассылка
          </h3>

        </div>
        <span className="article-aside-box__newsletter__text">
          Подпишитесь на нас и никогда не пропустите наши статьи
        </span>
        <label htmlFor="email" className="article-aside__label">
          <input
            id="email"
            placeholder="Электронная почта"
            className="article-aside__input"
          />
          <button type="submit" className="article-aside__input__button">
            <FontAwesomeIcon
              className="article-aside__input__icon"
              icon={faPaperPlane}
            />
          </button>
        </label>
      </div>

      <div className="article-aside-box__ad">
        <img
          alt="cafe"
          src="https://img1.goodfon.com/original/640x960/b/3d/sinister-2-clown-panic.jpg"
          className="article-aside-box__ad__link"
        />
      </div>
    </aside>
  );
};

ArticleAside.propTypes = {
  articlePaginate: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    mainImage: PropTypes.string,
    createDate: PropTypes.string,
    _id: PropTypes.string,
  })).isRequired,
};

export default ArticleAside;
