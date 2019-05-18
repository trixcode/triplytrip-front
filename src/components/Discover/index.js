import {useEffect} from 'react';
import SectionTitle from '../SectionTitle';

import './discover.scss';

const Discover = (props) => {
  const { topDestinations, getTopDestinationsStart } = props;
  useEffect(() => {
    getTopDestinationsStart()
  }, []);
  return (
    <section className='section-discover'>
      <div className='container'>
        <SectionTitle 
          name="discover your dream places"
          text="All the pathos and irony of leaving one’s youth behind is thus implicit in every joyous moment of travel: one knows that the first joy can never be recovered, and the wise traveler learns not to repeat successes but tries new places all the time."
        />
        <div className='discover-cards-wrapper'>
          {topDestinations.slice(0, 4).map(key=>(
            <div
              key={key.id} 
              className='discover-card'>
              <img  
                className='discover-card__image' 
                src={key.imageUrl}
                alt='logo' />
              <div className='discover-card__info-text'>
                <div className='discover-card__info-place'>
                  <span 
                    className='discover-card__info-place-name'>
                    {key.cityName}
                  </span>
                </div>
                <div className='discover-card__info-destination'>
                  <span 
                    className='discover-card__info-destination-name'>
                    {key.countDestinations} 
                    destination
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