import ListingLocation from '../ListingLocation';
import ListingPriceSegmentation from '../ListingPriceSegmentation'

import './listingForm.scss'


const ListingForm = () => {

    return (
      <div className='listing-form'>
        <div className='container'> 
          <ListingLocation />
          <ListingPriceSegmentation />
        </div>
      </div>
    )
}

export default ListingForm