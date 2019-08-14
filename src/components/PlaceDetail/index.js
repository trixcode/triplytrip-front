import './placeDetail.scss';
import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt, faGlobeAmericas, faMobileAlt, faDollarSign, faEnvelope, faCameraRetro, faWifi,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF, faTwitter, faGooglePlusG, faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import SubscribeArticlesContainer from '../../containers/SubscribeArticles';
import PlaceDetailContactFormContainer from '../../containers/PlaceDetailContactForm';
import DetailPostTopContainer from '../../containers/DetailPostTop';
//  Need check

const PlaceDetail = (props) => {
  const { getPlaceDetailByIdStart, placeDetail, match } = props;

  useEffect(() => {
    getPlaceDetailByIdStart(match.params.placeId);
    window.scrollTo(400, 400);
  }, [getPlaceDetailByIdStart, match.params.placeId]);
  const [isOverviewClicked, setOverview] = useState(true);
  const [isContactClicked, setContact] = useState(false);
  const [isReviewsClicked, setReview] = useState(false);
  const [isVideoClicked, setVideo] = useState(false);

  const switchTabs = (a, b, c, d) => {
    a(true);
    b(false);
    c(false);
    d(false);
    window.scrollTo(600, 600);
  };

  const selectedClass = 'main-info-tabs__tab_selected';
  const defaultClass = 'main-info-tabs__tab';

  const overview = (
    <div className="overview">
      <div className="overview__text">
        {parse(`${placeDetail.description}`)}
      </div>
      <h2 className="overview__title">{placeDetail.name}</h2>
      <div className="overview__pics">
        <img className="overview__image" alt={placeDetail.name} src={placeDetail.mainImage} />
      </div>
      <div className="overview__text">
        {parse(`${placeDetail.extraDescription}`)}
      </div>
      <div className="overview__save" />
    </div>
  );

  const contact = (
    <div className="contact">
      <div className="sidebars-form-wrapper">
        <div>
          <span>Ваше имя</span>
          <input type="text" />
        </div>
        <div>
          <span>Ваш Email</span>
          <input type="email" />
        </div>
        <div>
          <span>Tема</span>
          <input type="text" />
        </div>
        <div>
          <span>Вашe сообщениe</span>
          <input type="text" />
        </div>
        <button type="submit" className="sidebars-button">Отправить</button>
      </div>
      <div className="contact-map">There must be a map here</div>
    </div>
  );

  const reviews = <h2>Отзывы</h2>;

  const video = (
    <div className="video">
      <div>There must be a video here</div>
    </div>
  );

  return (
    <Fragment>
      <DetailPostTopContainer
        name={placeDetail.name}
        category={placeDetail.category}
        createDate={placeDetail.createDate}
        rate={placeDetail.rating}
      />
      <section className="place-detail">
        {
          placeDetail && (
            <div className="place-detail-container container">
              <div className="main-info">
                <div className="main-info-tabs">
                  <button
                    type="button"
                    id="overview"
                    onClick={() => switchTabs(setOverview, setVideo, setReview, setContact)}
                    className={isOverviewClicked ? classNames(defaultClass, selectedClass) : defaultClass}
                  >
                    Oбзор
                  </button>
                  <button
                    type="button"
                    id="contact"
                    onClick={() => switchTabs(setContact, setOverview, setReview, setVideo)}
                    className={isContactClicked ? classNames(defaultClass, selectedClass) : defaultClass}
                  >
                    Kонтакты
                  </button>
                  <button
                    type="button"
                    id="reviews"
                    onClick={() => switchTabs(setReview, setVideo, setOverview, setContact)}
                    className={isReviewsClicked ? classNames(defaultClass, selectedClass) : defaultClass}
                  >
                    Отзывы и рейтинги
                  </button>
                  <button
                    type="button"
                    id="video"
                    onClick={() => switchTabs(setVideo, setOverview, setReview, setContact)}
                    className={isVideoClicked ? classNames(defaultClass, selectedClass) : defaultClass}
                  >
                    Видео
                  </button>
                </div>
                {isOverviewClicked ? overview : ''}
                {isContactClicked ? contact : ''}
                {isReviewsClicked ? reviews : ''}
                {isVideoClicked ? video : ''}
              </div>

              <aside className="sidebar">
                <div className="sidebar-owner-info">
                  <div className="sidebar-owner-info__avatar" />
                  <span className="sidebar-owner-info__name">
                    {`${placeDetail.user.firstName} ${placeDetail.user.lastName}`}
                  </span>
                  <span className="sidebar-owner-info__status">Pедактор</span>
                  <div className="sidebar-owner-info__followers">
                    <div>
                      <span>Подписчики</span>
                      <span>120</span>
                    </div>
                    <div>
                      <span>Подписки</span>
                      <span>10</span>
                    </div>
                  </div>
                  <span className="sidebar-owner-info__follow">
                    Cледить
                    <FontAwesomeIcon icon={faWifi} />
                  </span>

                </div>
                <div className="sidebar-owner-contacts">
                  <ul className="sidebar-owner-contacts-info">
                    <li>
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="sidebar-owner-contacts-info__icon" />
                      {placeDetail.address}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faGlobeAmericas} className="sidebar-owner-contacts-info__icon" />
                      {placeDetail.email}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faMobileAlt} className="sidebar-owner-contacts-info__icon" />
                      {placeDetail.phone}
                    </li>
                  </ul>
                  <ul className="sidebar-owner-contacts-networks">
                    <li><div className="sidebar-facebook"><FontAwesomeIcon icon={faFacebookF} className="owner-contact-icon" /></div></li>
                    <li><div className="sidebar-twitter"><FontAwesomeIcon icon={faTwitter} className="owner-contact-icon" /></div></li>
                    <li><div className="sidebar-google"><FontAwesomeIcon icon={faGooglePlusG} className="owner-contact-icon" /></div></li>
                    <li><div className="sidebar-insta"><FontAwesomeIcon icon={faInstagram} className="owner-contact-icon" /></div></li>
                  </ul>
                  <div className="sidebars-button">Посетить сайты</div>
                </div>
                <div className="sidebar-price">
                  <div className="sidebars-title">
                    <div><FontAwesomeIcon icon={faDollarSign} /></div>
                    <h5>Ценовой диапазон</h5>
                  </div>
                  <span>Цена: </span>
                  <span className="sidebar-price__price">
                    {' '}
                    {placeDetail.price}
                    {' '}
                    сом
                  </span>
                </div>
                <div className="sidebar-contact-me">
                  <div className="sidebars-title">
                    <div><FontAwesomeIcon icon={faEnvelope} /></div>
                    <h5>Свяжитесь с нами</h5>
                  </div>
                  <PlaceDetailContactFormContainer />
                </div>
                <div className="sidebar-map">
                  <div className="sidebars-title">
                    <div><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                    <h5>Kарта</h5>
                  </div>
                </div>
                <div className="sidebar-gallery">
                  <div className="sidebars-title">
                    <div><FontAwesomeIcon icon={faCameraRetro} /></div>
                    <h5>Галерея</h5>
                  </div>
                </div>
                <div className="sidebar-subscribe">
                  <div className="sidebars-title">
                    <div><FontAwesomeIcon icon={faEnvelope} /></div>
                    <h5>Подписаться</h5>
                  </div>
                  <SubscribeArticlesContainer />
                </div>
              </aside>
            </div>
          )
        }

      </section>
    </Fragment>
  );
};

PlaceDetail.propTypes = {
  placeDetail: PropTypes.shape({
    description: PropTypes.string,
    extraDescription: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    mainImage: PropTypes.string,
    rating: PropTypes.number,
    createDate: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  getPlaceDetailByIdStart: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      placeId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default PlaceDetail;
