import PlaceCard from './PlaceCard';
import './places.scss'

import hotels from './hotels.json';

const Places = props => {
    const places = hotels.hotels
    return (
     <section className='places-container' > 
        <h2 className='places__title'>
            Popular Thing To Do
        </h2>
        <span className='places__text'>
            popular exclusive listings in our directory
        </span>
        <div className='places-button-container'>
            <button 
                className='places__button all'
                id='all'> 
                All 
            </button>
            <button 
                id='hotels'
                className='places__button hotel'> 
                Hotel
            </button>
            <button 
                id='restaraunts'
                className='places__button restaurant'>
                Restaurant
            </button>
            <button 
                className='places__button dinner'> 
                Dinner 
            </button>
            <button 
                className='places__button clubBar'> 
                Club & Bar 
            </button>
            <button 
                className='places__button coffee'>
                Coffee
            </button>
            <button 
                className='places__button destinations'>
                Destinations
            </button>
         </div>
        <div className='place-cards-container'>
           { places.slice(0, 8).map(placeObj=>{
               return ( 
                    <PlaceCard 
                        key={placeObj.name} 
                        place={placeObj} 
                    />
                )
           })}           
        </div>
     </section>
    )
}

export default Places;