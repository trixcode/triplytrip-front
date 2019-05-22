
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import PlaceCard from '../PlaceCard';
import './placesFilterResult.scss'

const PlacesFilterResult = (props) => {
  const { places } = props;
  return (
    <div className='filter-result'>
      <div className='container'>
        <div className='filter-result-cards-wrapper'>
          {places.slice(0, 12).map(placeObj => {
            return (
              <PlaceCard
                key={placeObj.name}
                place={placeObj} />)
          })}
        </div>
        <div className="pages-numbers">
          {[1, 2, 3, 4, 5].map(key => (
            <button
              key={key}
              className="pages-numbers__button">
              {key}
            </button>
          ))}
          <button className="pages-numbers__button">
            Next
            <FontAwesomeIcon
              className='pages-numbers__button__icon'
              icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlacesFilterResult;