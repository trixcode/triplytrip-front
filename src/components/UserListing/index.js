import React from 'react';
import { faEdit, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './userListing.scss';

const Listing = () => {
  console.log('listing');
  return (
    <div className="user-wrapper-listing">
      <div className="user-wrapper-listing__tabs">
        {['all', 'published', 'in review', 'unpaid', 'expired'].map(tabs => (
          <button
            type="button"
            key={tabs}
            value={tabs}
            className="user-wrapper-listing__tabs--btn"
          >
            {tabs}
          </button>
        ))}
      </div>
      <div className="user-wrapper-listing__content">
        {['Janat Restaraunt', 2, 3, 4, 5].map(block => (
          <div
            key={block}
            className="user-wrapper-listing__content--block"
          >
            <div className="user-wrapper-listing__content--block__image">
              210 x 137px
            </div>
            <div className="user-wrapper-listing__content--block__sidebar">
              <div className="user-wrapper-listing__content--block__sidebar--info">
                <div className="user-wrapper-listing__content--block__sidebar--info__name">
                  {block}
                </div>
                <div className="user-wrapper-listing__content--block__sidebar--info__category">
                  hotel
                </div>
              </div>
              <div className="user-wrapper-listing__content--block__sidebar--buttons">
                <button
                  type="button"
                  className="user-wrapper-listing__content--block__sidebar--buttons__btn"
                >
                  <span className="user-wrapper-listing__content--block__sidebar--buttons__btn--icon">
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                  <span className="user-wrapper-listing__content--block__sidebar--buttons__btn--text">
                    view
                  </span>
                </button>
                <button
                  type="button"
                  className="user-wrapper-listing__content--block__sidebar--buttons__btn"
                >
                  <span className="user-wrapper-listing__content--block__sidebar--buttons__btn--icon">
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                  <span className="user-wrapper-listing__content--block__sidebar--buttons__btn--text">
                    edit
                  </span>
                </button>
                <button
                  type="button"
                  className="user-wrapper-listing__content--block__sidebar--buttons__btn"
                >
                  <span className="user-wrapper-listing__content--block__sidebar--buttons__btn--icon">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                  <span className="user-wrapper-listing__content--block__sidebar--buttons__btn--text">
                    delete
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
