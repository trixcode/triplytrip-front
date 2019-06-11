import {useEffect, useState} from 'react';
import React from 'react'
import PlaceCard from '../PlaceCard';
import SectionTitle from '../SectionTitle';
import './places.scss'

const Places = props => {

  const { places, getPlacesStart } = props;

  const [isAllSelected, setAllTab] = useState(true);
  const [isHotelSelected, setHotelTab] = useState(false);
  const [isRestaurantSelected, setRestaurantTab] = useState(false);
  const [isDinnerSelected, setDinnerTab] = useState(false)

  const switchClassesOfTabs = (a,b,c,d) => {
    a(true)
    b(false)
    c(false)
    d(false)
  }

  useEffect(() => {
    getPlacesStart('isOpen=true&_limit=8')
  }, []);

    return (
    <section className='section-places'>
      <div className='container' >
        <SectionTitle
          name="Popular Thing To Do"
          text="popular exclusive listings in our directory"
        />
        <div className='places-tags-wrapper'>
          <button
            className={isAllSelected ? 'places__tag places__tag_selected' : 'places__tag'}
            id='all' onClick={() => getPlacesStart('isOpen=true&_limit=8')
            + switchClassesOfTabs(setAllTab,setHotelTab,setDinnerTab,setRestaurantTab)}>
            All
          </button>
          <button
            id='hotels'
            className={isHotelSelected ? 'places__tag places__tag_selected' : 'places__tag'}
            onClick={() => getPlacesStart('isOpen=true&categoriesId=1&_limit=8') 
            + switchClassesOfTabs(setHotelTab,setAllTab,setDinnerTab,setRestaurantTab)}>
            Hotel
          </button>
          <button
            id='restaraunts'
            className={isRestaurantSelected ? 'places__tag places__tag_selected' : 'places__tag'}
            onClick={() => getPlacesStart('isOpen=true&categoriesId=2&_limit=8')
            + switchClassesOfTabs(setRestaurantTab,setAllTab,setDinnerTab,setHotelTab)}>
            Restaurant
          </button>
          <button
            className={isDinnerSelected ? 'places__tag places__tag_selected' : 'places__tag'}
            onClick={() => getPlacesStart('isOpen=true&categoriesId=3&_limit=8')
            + switchClassesOfTabs(setDinnerTab,setAllTab,setHotelTab,setRestaurantTab)}>
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
          {places.places.slice(0, 8).map(placeObj => {
            return (
              <PlaceCard
                key={placeObj.id}
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