import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import {
  faStar, faUser, faUserFriends, faExclamationTriangle, faShareAlt, faHeart, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import './DetailPostTop.scss';

const DetailPostTop = (props) => {
  const interactiveIconsArr = [faUser, faUserFriends, faExclamationTriangle, faShareAlt, faHeart, faEnvelope];

  const {
    name, category, createDate, rate, categories,
  } = props;

  const findNameOfCategory = () => {
    const nameOfCate = categories.find(categors => categors.id === category && categors.name);
    const nameOf = nameOfCate && nameOfCate.name;
    return nameOf;
  };
  return (
    <div className="detail-post-top">
      <div className="detail-post-top_image_wrapper">
        <img
          className="detail-post-top_image"
          src="https://img5.goodfon.com/original/1680x1050/3/67/ulitsa-doma-maiami-florida-ssha-ocean-drive.jpg"
          alt="hotel"
        />
      </div>
      <div className="detail-post-top-place">
        <div className="container">
          <div className="detail-post-top-place-wrapper">
            <h2
              className="detail-post-top-place__name"
            >
              {name}
            </h2>
            <div className="detail-post-top-place-content">
              <div className="detail-post-top-place-info">
                <div className="detail-post-top-place-info__wrapper wrapper_right_line">
                  <span
                    className="detail-post-top-place-info__text"
                  >
                    Oпубликовано
                  </span>
                  <span
                    className="detail-post-top-place-info__detail"
                  >
                    {moment(createDate).format('DD MMM YYYY')}
                  </span>
                </div>
                <div className="detail-post-top-place-info__wrapper wrapper_right_line">
                  <span
                    className="detail-post-top-place-info__text"
                  >
                     Kатегория
                  </span>
                  <span
                    className="detail-post-top-place-info__detail"
                  >
                    {findNameOfCategory()}
                  </span>
                </div>
                <div className="detail-post-top-place-info__wrapper">
                  <span
                    className="detail-post-top-place-info__text"
                  >
                     Рейтинг
                  </span>
                  <div className="detail-post-top-place-info__rating">
                    <div
                      className="detail-post-top-place-info__rating__icons"
                    >
                      {[1, 2, 3, 4, 5].map(iconIndex => (
                        <FontAwesomeIcon
                          key={iconIndex}
                          style={{ color: iconIndex <= rate && '#ffba00' }}
                          className="detail-post-top-place-info__rating__icon"
                          icon={faStar}
                        />
                      ))}
                    </div>
                    <p
                      className="detail-post-top-place-info__rating__number"
                    >
                      {rate}
                    </p>
                  </div>
                </div>
              </div>
              <ul className="detail-post-top-place-interactive">
                {interactiveIconsArr.map(key => (
                  <li
                    key={key.iconName}
                    className={`detail-post-top-place-interactive__icon interactive__icon__${key.iconName}`}
                  >
                    <FontAwesomeIcon
                      icon={key}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailPostTop.propTypes = {
  name: PropTypes.string,
};

DetailPostTop.defaultProps = {
  name: '',
};

export default DetailPostTop;
