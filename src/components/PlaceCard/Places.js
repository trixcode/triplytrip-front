import PlaceCard from './PlaceCard';
import './places.scss'

import hotels from '../../../../fake-api-triplytrip/src/db/hotels.json';

const Places = props => {
    const places = hotels.hotels
    return (
     <section className='placesContainer' > 
        <h2 className='placesTitle'>
            Popular Thing To Do
        </h2>
        <span className='placesText'>
            popular exclusive listings in our directory
        </span>
        <div className='placesButtonContainer'>
            <button 
                className='placesButton all'
                id='all'> 
                All 
            </button>
            <button 
                id='hotels'
                className='placesButton hotel'> 
                Hotel
            </button>
            <button 
                id='restaraunts'
                className='placesButton restaurant'>
                Restaurant
            </button>
            <button 
                className='placesButton dinner'> 
                Dinner 
            </button>
            <button 
                className='placesButton clubBar'> 
                Club & Bar 
            </button>
            <button 
                className='placesButton coffee'>
                Coffee
            </button>
            <button 
                className='placesButton destinations'>
                Destinations
            </button>
         </div>
        <div className='placeCardsContainer'>
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

export default Places