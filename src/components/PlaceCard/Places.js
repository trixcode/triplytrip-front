import PlaceCard from './PlaceCard';
import SectionTitle from '../SectionTitle';
import './places.scss'

import hotels from './hotels.json';

const Places = props => {
  const places = hotels.hotels
  return (
    <section className='section-places'>
      <div className='container' >
        <SectionTitle
          name="Popular Thing To Do"
          text="popular exclusive listings in our directory"
        />
        <div className='places-tags-wrapper'>
          <button
            className='places__tag places__tag_all'
            id='all'>
            All
                    </button>
          <button
            id='hotels'
            className='places__tag places__tag_hotel'>
            Hotel
                    </button>
          <button
            id='restaraunts'
            className='places__tag places__tag_restaurant'>
            Restaurant
                    </button>
          <button
            className='places__tag places__tag_dinner'>
            Dinner
                    </button>
          <button
            className='places__tag places__tag_clubbar'>
            Club & Bar
                    </button>
          <button
            className='places__tag places__tag_coffee'>
            Coffee
                    </button>
          <button
            className='places__tag places__tag_destinations'>
            Destinations
                    </button>
        </div>
        <div
          className='place-cards-wrapper'>
          {places.slice(0, 8).map(placeObj => {
            return (
              <PlaceCard
                key={placeObj.name}
                place={placeObj}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Places;