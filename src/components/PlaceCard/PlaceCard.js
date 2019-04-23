import './PlaceCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMobileAlt, faGlobeAmericas, faStar, faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';


const PlaceCard = props => {
    const {place} = props;

    return (
        <div className='placeCard-container'>
            <div className='placeCard-img-container'> 
                <img 
                    src={place.mainImage} 
                    alt='place' 
                    className='placeCard__img'/>
            </div>
            <div className='placeCard-avatar-container'>
                <img 
                    src='https://img5.goodfon.com/wallpaper/big/0/de/devushka-ulybka-vzgliad-glaza-vesnushki-veronika-vonka-roma.jpg' 
                    alt='avatar' 
                    className='placeCard__avatar'/>
            </div>
            <span className='placeCard__name'>
                {place.name} 
            </span> 
            <span className='placeCard__price grey'>
                {place.price} сом
            </span>
            <div className='placeCard-rates'>
               { <FontAwesomeIcon 
                    className='rate__star__icon' 
                    icon={faStar} 
                />}
                { <FontAwesomeIcon 
                    className='rate__star__icon' 
                    icon={faStar} 
                />}
                { <FontAwesomeIcon 
                    className='rate__star__icon' 
                    icon={faStar} 
                />}
                { <FontAwesomeIcon 
                    className='rate__star__icon' 
                    icon={faStar} 
                />}
                { <FontAwesomeIcon 
                    className='rate__star__icon' 
                    icon={faStar} 
                />}               
            </div>
            <div className='placeCard-addres grey'>
                <FontAwesomeIcon 
                    className='placeCard__icon'
                    icon={faMapMarkerAlt} />
                <span 
                    className='placeCard__info location'>
                    {place.address}  
                </span> 
            </div>
            <div className='placeCard-site grey'> 
                <FontAwesomeIcon 
                    className='placeCard__icon'
                    icon={faGlobeAmericas} />
                <a 
                    href={place.email} 
                    className='placeCard__info site'> 
                    {place.email}  
                </a>
            </div>
            <div className='placeCard-phone-number grey'>
                <FontAwesomeIcon 
                    className='placeCard__icon'
                    icon={faMobileAlt} />
                <span className='placeCard__info number'>  
                    +{place.phone} 
                </span>
            </div>  
            <div className='placeCard-button-container'>
                <button className='placeCard__button detail'>
                    View Detail
                </button>
                <button className='placeCard__button'>
                    <FontAwesomeIcon 
                        className='card__button__icon location' 
                        icon={faMapMarkerAlt} />
                </button>
                <button className='placeCard__button'>
                    <FontAwesomeIcon 
                        className='card__button__icon arrows' 
                        icon={faExchangeAlt} />
                </button>
                <button className='placeCard__button'>
                    <FontAwesomeIcon 
                        className='card__button__icon heard' 
                        icon={faHeart} />
                </button>
            </div>          
        </div>
    )
}

export default PlaceCard