import './PlaceCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMobileAlt, faGlobeAmericas, faStar, faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';


const PlaceCard = props => {
    const {place} = props;
    return (
        <div className='placeCardContainer'>
            <div className='placeCardImageContainer'> 
                <img 
                    src={place.mainImage} 
                    alt='place' 
                    className='placeCardImage'/>
            </div>
            <div className='placeCardAvatarContainer'>
                <img 
                    src='https://img5.goodfon.com/wallpaper/big/0/de/devushka-ulybka-vzgliad-glaza-vesnushki-veronika-vonka-roma.jpg' 
                    alt='avatar' 
                    className='placeCardAvatar'/>
            </div>
            <span className='placeCardName'>
                {place.name} 
            </span> 
            <span className='placeCardPrice grey'>
                {place.price} сом
            </span>
            <div className='placeCardRates'>
               { <FontAwesomeIcon 
                    className='rateStarIcon' 
                    icon={faStar} 
                />}
                { <FontAwesomeIcon 
                    className='rateStarIcon' 
                    icon={faStar} 
                />}
                { <FontAwesomeIcon 
                    className='rateStarIcon' 
                    icon={faStar} 
                />}
                { <FontAwesomeIcon 
                    className='rateStarIcon' 
                    icon={faStar} 
                />}
                { <FontAwesomeIcon 
                    className='rateStarIcon' 
                    icon={faStar} 
                />}               
            </div>
            <div className='placeCardAddres grey'>
                <FontAwesomeIcon 
                    className='placeCardIcon'
                    icon={faMapMarkerAlt} />
                <span 
                    className='placeCarInfo location'>
                    {place.address}  
                </span> 
            </div>
            <div className='placeCardSite grey'> 
                <FontAwesomeIcon 
                    className='placeCardIcon'
                    icon={faGlobeAmericas} />
                <a 
                    href={place.email} 
                    className='placeCarInfo site'> 
                    {place.email}  
                </a>
            </div>
            <div className='placeCardPhoneNumber grey'>
                <FontAwesomeIcon 
                    className='placeCardIcon'
                    icon={faMobileAlt} />
                <span className='placeCarInfo number'>  
                    +{place.phone} 
                </span>
            </div>  
            <div className='placeCardButtons'>
                <button className='placeCardButton detail'>
                    View Detail
                </button>
                <button className='placeCardButton'>
                    <FontAwesomeIcon 
                        className='cardButtonIcon location' 
                        icon={faMapMarkerAlt} />
                </button>
                <button className='placeCardButton'>
                    <FontAwesomeIcon 
                        className='cardButtonIcon arrows' 
                        icon={faExchangeAlt} />
                </button>
                <button className='placeCardButton'>
                    <FontAwesomeIcon 
                        className='cardButtonIcon heard' 
                        icon={faHeart} />
                </button>
            </div>          
        </div>
    )
}

export default PlaceCard