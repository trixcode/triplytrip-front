import PlaceCard from './PlaceCard';
import './places.scss'

const Places = props => {
    return (
     <sction className='placesContainer' > 
         <h2 className='placesTitle'>Popular Thing To Do</h2>
         <span className='placesText'>popular exclusive listings in our directory</span>
         <div className='placesButtonContainer'>
             <button className='placesButton all'> All </button>
             <button className='placesButton hotel'> Hotel</button>
             <button className='placesButton restaurant'>Restaurant</button>
             <button className='placesButton dinner'> Dinner </button>
             <button className='placesButton clubBar'> Club & Bar </button>
             <button className='placesButton coffee'>Coffee</button>
             <button className='placesButton destinations'>Destinations</button>
         </div>
         <div className='placeCardsContainer'>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
         </div>
        
     </sction>
    )
}

export default Places