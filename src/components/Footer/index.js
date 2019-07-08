import { withRouter } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect } from 'react'
import './footer.scss';

const Footer = (props) => {
  const { history, getArticlesToFooterStart, footerArticle } = props;

  const pushToCategories = (category) => {
    history.push(`/placesCategory?category=${category}`)
  }

  const pushToArticleDetail = () => {
    history.push(`/articles`)
  }
  useEffect(() => {
    getArticlesToFooterStart()
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-container">
        <ul className="footer-list">
          <li className="footer-list__item">
            <span>Заведения</span>
          </li>
          <li>
            <a className="footer-list__link" href="#" onClick={() => pushToCategories('hotel')}>Отели</a>
          </li>
          <li>
            <a className="footer-list__link" href="#" onClick={() => pushToCategories('restaurant')}>Рестораны</a>
          </li>
          <li>
            <a className="footer-list__link" href="#" onClick={() => pushToCategories('cafe')}>Кафе</a>
          </li>
          <li>
            <a className="footer-list__link" href="#" onClick={() => pushToCategories('guest house')}>Гостевые дома</a>
          </li>
          <li>
            <a className="footer-list__link" href="#" onClick={() => pushToCategories('night club')}>Ночные клубы</a>
          </li>
        </ul>

        <ul className="footer-list">
          <li>
            <span href="#">Статьи</span>
          </li>
          {footerArticle.map(footerArticle => (
            <li key={footerArticle._id}>
              <a className="footer-list__link" href="#"
               onClick={pushToArticleDetail}
              >{footerArticle.title}</a>
            </li>
          ))}
        </ul>

      </div>
      <br></br>
      <div className="sub-footer">
        <div className="container footer-wrapper">
          <div className="footer-copyright">
            <span className="footer-copyright__text">
              Copyright © 2018 Listicle.com | Tel: +91 12343210
            </span>
          </div>
          <ul className="footer-social-item">
            <li className="footer-social__list">
              <a className="footer-social__link">
                <FontAwesomeIcon
                  className='footer-social__icon'
                  icon={faFacebook}
                />
              </a>
            </li>
            <li className="footer-social__list">
              <a className="footer-social__link">
                <FontAwesomeIcon
                  className='footer-social__icon'
                  icon={faTwitter}
                />
              </a>
            </li>
            <li className="footer-social__list">
              <a className="footer-social__link">
                <FontAwesomeIcon
                  className='footer-social__icon'
                  icon={faInstagram}
                />
              </a>
            </li>
          </ul>
        </div>
      </div >

    </footer >
  )
}
export default withRouter(Footer);