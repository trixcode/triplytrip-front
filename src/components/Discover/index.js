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
          name="откройте для себя места своей мечты"
          text="Уникальное кочевое наследие и захватывающая история Великого Шелкового пути привлекают как искателей приключений, так и любителей культуры"
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
                     Мест
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