import {useEffect} from 'react';
import React from 'react'
import SectionTitle from '../SectionTitle';

import './discover.scss';

const Discover = (props) => {
  const { topDestinations, getTopDestinationsStart } = props;
  useEffect(() => {
    getTopDestinationsStart()
  }, [getTopDestinationsStart]);
  return (
    <section className='section-discover'>
      <div className='container'>
        <SectionTitle 
          name="discover your dream places"
          text="All the pathos and irony of leaving one’s youth behind is thus implicit in every joyous moment of travel: one knows that the first joy can never be recovered, and the wise traveler learns not to repeat successes but tries new places all the time."
        />
        <div className='discover-cards-wrapper'>
          {topDestinations.map(topDestinations=>(
            <div
              key={topDestinations._id} 
              className='discover-card'>
              <img  
                className='discover-card__image' 
                src={topDestinations.mainImage}
                alt='logo' />
              <div className='discover-card__info-text'>
                <div className='discover-card__info-place'>
                  <span 
                    className='discover-card__info-place-name'>
                    {topDestinations.cities.name}
                  </span>
                </div>
                <div className='discover-card__info-destination'>
                  <span 
                    className='discover-card__info-destination-name'>
                    {topDestinations.countDestinations + ' '} 
                     Destinations
                  </span>
                </div>
              </div>
            </div> 
          ))}
     
        </div>
      </div>
    </section>
  )
}

export default Discover;