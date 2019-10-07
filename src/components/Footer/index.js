import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

const Footer = (props) => {
  const { history, getArticlesToFooterStart, footerArticle } = props;

  const pushToCategories = (category) => {
    history.push(`/placesCategory?category=${category}`);
  };

  const pushToArticleDetail = () => {
    history.push('/articles');
  };
  useEffect(() => {
    getArticlesToFooterStart();
  }, [getArticlesToFooterStart]);
  return (
    <footer className="footer">
      <div className="container footer-container">
        <ul className="footer-list">
          <li className="footer-list__item">
            <span>Заведения</span>
          </li>
          <li>
            <span role="presentation" className="footer-list__link" onClick={() => pushToCategories('hotel')}>Отели</span>
          </li>
          <li>
            <span role="presentation" className="footer-list__link" href="#" onClick={() => pushToCategories('restaurant')}>Рестораны</span>
          </li>
          <li>
            <span role="presentation" className="footer-list__link" href="#" onClick={() => pushToCategories('cafe')}>Кафе</span>
          </li>
          <li>
            <span role="presentation" className="footer-list__link" href="#" onClick={() => pushToCategories('guest house')}>Гостевые дома</span>
          </li>
          <li>
            <span role="presentation" className="footer-list__link" href="#" onClick={() => pushToCategories('night club')}>Ночные клубы</span>
          </li>
          <li>
            <span role="presentation" className="footer-list__link" href="#" onClick={() => pushToCategories('chaihana')}>Чайхана</span>
          </li>
        </ul>

        <ul className="footer-list">
          <li>
            <span>Статьи</span>
          </li>

          {footerArticle.map(articleFooter => (
            <li key={articleFooter._id}>
              <span
                className="footer-list__link"
                onClick={pushToArticleDetail}
                role="presentation"
              >
                {articleFooter.title}
              </span>
            </li>
          ))}
        </ul>

      </div>
      <br />
      <div className="sub-footer">
        <div className="container footer-wrapper">
          <div className="footer-copyright">
            <span className="footer-copyright__text">
              Copyright © 2019 Triplytrip.kg | Tel: +996 553-99-13-11
            </span>
          </div>
          <ul className="footer-social-item">
            <li className="footer-social__list">
              <a className="footer-social__link" href="/">
                <FontAwesomeIcon
                  className="footer-social__icon"
                  icon={faFacebook}
                />
              </a>
            </li>
            <li className="footer-social__list">
              <a className="footer-social__link" href="/">
                <FontAwesomeIcon
                  className="footer-social__icon"
                  icon={faTwitter}
                />
              </a>
            </li>
            <li className="footer-social__list">
              <a className="footer-social__link" href="/">
                <FontAwesomeIcon
                  className="footer-social__icon"
                  icon={faInstagram}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

    </footer>
  );
};

Footer.propTypes = {
  footerArticle: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  getArticlesToFooterStart: PropTypes.func.isRequired,
};


export default withRouter(Footer);
