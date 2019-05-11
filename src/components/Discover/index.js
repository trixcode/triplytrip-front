import {useEffect} from 'react';
import SectionTitle from '../SectionTitle';

import './discover.scss';

const Discover = (props) => {
  const { topDestinations, getTopDestinationsStart } = props;
  useEffect(() => {
    getTopDestinationsStart()
  }, []);
  console.log(topDestinations)
  return (
    <section className='section-discover'>
      <div className='container'>
        <SectionTitle 
          name="discover your dream places"
          text="All the pathos and irony of leaving one’s youth behind is thus implicit in every joyous moment of travel: one knows that the first joy can never be recovered, and the wise traveler learns not to repeat successes but tries new places all the time."
        />
        <div className='discover-cards-wrapper'>
          <div className='discover-card'>
            <img className='discover-card__image' src='https://static.wixstatic.com/media/c9dceb0320d64d4ab5995ff29a3e4a8e.jpg/v1/fill/w_330,h_420,al_c,q_80,usm_0.66_1.00_0.01/c9dceb0320d64d4ab5995ff29a3e4a8e.jpg' alt='logo' />
            <div className='discover-card__info-text'>
              <div className='discover-card__info-place'>
                <span className='discover-card__info-place-name'>london</span>
              </div>
              <div className='discover-card__info-destination'>
                <span className='discover-card__info-destination-name'>8 destination</span>
              </div>
            </div>
          </div>
          <div className='discover-card'>
            <img className='discover-card__image' src='https://static.wixstatic.com/media/c9dceb0320d64d4ab5995ff29a3e4a8e.jpg/v1/fill/w_330,h_420,al_c,q_80,usm_0.66_1.00_0.01/c9dceb0320d64d4ab5995ff29a3e4a8e.jpg' alt='logo' />
            <div className='discover-card__info-text'>
              <div className='discover-card__info-place'>
                <span className='discover-card__info-place-name'>london</span>
              </div>
              <div className='discover-card__info-destination'>
                <span className='discover-card__info-destination-name'>8 destination</span>
              </div>
            </div>
          </div>
          <div className='discover-card'>
            <img className='discover-card__image' src='https://static.wixstatic.com/media/c9dceb0320d64d4ab5995ff29a3e4a8e.jpg/v1/fill/w_330,h_420,al_c,q_80,usm_0.66_1.00_0.01/c9dceb0320d64d4ab5995ff29a3e4a8e.jpg' alt='logo' />
            <div className='discover-card__info-text'>
              <div className='discover-card__info-place'>
                <span className='discover-card__info-place-name'>london</span>
              </div>
              <div className='discover-card__info-destination'>
                <span className='discover-card__info-destination-name'>8 destination</span>
              </div>
            </div>
          </div>
          <div className='discover-card'>
            <img className='discover-card__image' src='https://static.wixstatic.com/media/c9dceb0320d64d4ab5995ff29a3e4a8e.jpg/v1/fill/w_330,h_420,al_c,q_80,usm_0.66_1.00_0.01/c9dceb0320d64d4ab5995ff29a3e4a8e.jpg' alt='logo' />
            <div className='discover-card__info-text'>
              <div className='discover-card__info-place'>
                <span className='discover-card__info-place-name'>london</span>
              </div>
              <div className='discover-card__info-destination'>
                <span className='discover-card__info-destination-name'>8 destination</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discover;