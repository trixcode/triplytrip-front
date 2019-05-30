import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import './listingImageLoad.scss'


const ListingImageLoad =()=> {
  return (
    <div>
      <div className='listing-image'>
        <h3 className='listing-image-logo__title'>
          logo
        </h3>
      <div className='listing-image-logo__img__load'>
        <FontAwesomeIcon
          className='listing-image-logo__img__load__icon'
          icon={faImage} />
      </div>
      <div div className='listing-image-featured-image'>
        <FontAwesomeIcon
              className='listing-image-logo__img__load__icon'
              icon={faImage} />
      </div>
    </div>
      <div className='listing-content'>
      <h3 className='listing-image-logo__title'>
          logo
        </h3>
        <div className='listing-content-wysiwyg'>

        </div>

      </div>
    </div>
  )
}
export default ListingImageLoad;