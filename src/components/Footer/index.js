import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <ul className="footer-list">
          <li className="footer-list__item">
            <span>The Highights</span>
          </li>
          <li>
            <a className="footer-list__link" href="#">Dinner</a>
          </li>
          <li>
            <a className="footer-list__link" href="#">Restarounts</a>
          </li>
          <li>
            <a className="footer-list__link" href="#">Hotel</a>
          </li>
          <li>
            <a className="footer-list__link" href="#">Coffee</a>
          </li>
          <li>
            <a className="footer-list__link" href="#">Club & bar</a>
          </li>
        </ul>

        <ul className="footer-list">
          <li>
            <span href="#">Events</span>
          </li>
          <li>
            <a className="footer-list__link" href="#">Low Read live</a>
          </li>
          <li>
            <a className="footer-list__link" href="#">Kick of Friday</a>
          </li>
          <li>
            <a className="footer-list__link" href="#">30 Plus Club Classics Dance</a>
          </li>
          <li>
            <a className="footer-list__link" href="#">We Will Rock You</a>
          </li>
          <li>
            <a className="footer-list__link" href="#">Baseball Champs</a>
          </li>
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
export default Footer;