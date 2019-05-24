import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faUserFriends, faExclamationTriangle, faShareAlt, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './DetailPostTop.scss';

const DetailPostTop = (props) => {
  const interactiveIconsArr = [faUser, faUserFriends, faExclamationTriangle, faShareAlt, faHeart, faEnvelope];
  const { p } = props;

  return (
    <div className='detail-post-top'>
      <div className='detail-post-top_image_wrapper'>
        <img
          className='detail-post-top_image'
          src='https://img1.goodfon.com/original/4368x2912/8/cd/interer-stil-dizayn-terrasa-2974.jpg'
          alt='hotel' />
      </div>
      <div className='detail-post-top-place'>
        <div className='container'>
          <div className='detail-post-top-place-wrapper'>
            <h2
              className='detail-post-top-place__name'>
              the hoxton hotel
            </h2>
            <div className='detail-post-top-place-content'>
              <div className='detail-post-top-place-info'>
                <div className='detail-post-top-place-info__wrapper wrapper_right_line'>
                  <span
                    className='detail-post-top-place-info__text'>
                    Posted on
                  </span>
                  <span
                    className='detail-post-top-place-info__detail'>
                    May 09 2017
                  </span>
                </div>
                <div className='detail-post-top-place-info__wrapper wrapper_right_line'>
                  <span
                    className='detail-post-top-place-info__text'>
                    Category
                  </span>
                  <span
                    className='detail-post-top-place-info__detail'>
                    Hotel
                  </span>
                </div>
                <div className='detail-post-top-place-info__wrapper'>
                  <span
                    className='detail-post-top-place-info__text'>
                    Rating
                  </span>
                  <div className='detail-post-top-place-info__rating'>
                    <p
                      className='detail-post-top-place-info__rating__icons'>
                      {[1, 2, 3, 4, 5].map(iconIndex => (
                        <FontAwesomeIcon
                          key={iconIndex}
                          style={{ color: iconIndex <= 3 && '#ffba00' }}
                          className='detail-post-top-place-info__rating__icon'
                          icon={faStar} />
                      ))}
                    </p>
                    <p
                      className='detail-post-top-place-info__rating__number'>
                      3
                    </p>
                  </div>
                </div>
              </div>
              <div className='detail-post-top-place-interactive'>
                {interactiveIconsArr.map(key => (
                  <p
                    key={key.iconName}
                    className={'detail-post-top-place-interactive__icon' + ` interactive__icon__${key.iconName}`}>
                    <FontAwesomeIcon
                    icon={key} />
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPostTop