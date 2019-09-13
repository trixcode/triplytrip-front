
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PlaceCard from '../PlaceCard';
import './placesFilterResult.scss';

const PlacesFilterResult = (props) => {
  const { places } = props;
  return (
    <div className="filter-result">
      <div className="container">
        <div className="filter-result-cards-wrapper">
          {places.slice(0, 12).map(placeObj => (
            <PlaceCard
              key={placeObj.name}
              place={placeObj}
            />
          ))}
        </div>
        <div className="pages-numbers">
          {[1, 2, 3, 4, 5].map(key => (
            <button
              type="button"
              key={key}
              className="pages-numbers__button"
            >
              {key}
            </button>
          ))}
          <button type="button" className="pages-numbers__button">
            Next
            <FontAwesomeIcon
              className="pages-numbers__button__icon"
              icon={faAngleRight}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

PlacesFilterResult.propTypes = {
  places: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default PlacesFilterResult;
