import ListingLocation from '../ListingLocation';
import ListingPriceSegmentation from '../ListingPriceSegmentation'
import ListingImageLoad from '../ListingImageLoad'

import './listingForm.scss'


const ListingForm = () => {

    return (
      <div className='listing-form'>
        <div className='container'> 
          <ListingLocation />
          <ListingPriceSegmentation />
          <ListingImageLoad />
        </div>
      </div>
    )
}

export default ListingForm