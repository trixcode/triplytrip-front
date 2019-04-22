import './PlaceCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMobileAlt, faGlobeAmericas, faStar, faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';


const PlaceCard = props => {

    <FontAwesomeIcon icon={faMapMarkerAlt} />
    return (
        <div className='placeCardContainer'>
            <div className='placeCardImageContainer'> 
                <img src='https://img3.goodfon.com/wallpaper/big/7/66/other-serbia-city-night-hotel.jpg' alt='hotel' className='placeCardImage'/>
            </div>
            <div className='placeCardAvatarContainer'>
                <img src='https://img5.goodfon.com/wallpaper/big/0/de/devushka-ulybka-vzgliad-glaza-vesnushki-veronika-vonka-roma.jpg' alt='avatar' className='placeCardAvatar'/>
            </div>
            <span className='placeCardName'>
                Jardiniere Restaurant   
            </span> 
            <span className='placeCardPrice grey'>
                Restaurant . $10 - $90
            </span>
            <div className='placeCardRates'>
               { <FontAwesomeIcon className='rateStarIcon' icon={faStar} />}
               { <FontAwesomeIcon className='rateStarIcon' icon={faStar} />}
               { <FontAwesomeIcon className='rateStarIcon' icon={faStar} />}
               { <FontAwesomeIcon className='rateStarIcon' icon={faStar} />}
               { <FontAwesomeIcon className='rateStarIcon' icon={faStar} />}
            </div>
            <div className='placeCardAddres grey'>
                <FontAwesomeIcon 
                    className='placeCardIcon'
                    icon={faMapMarkerAlt} />
                <span className='placeCarInfo location'>Montana, USA </span> 
            </div>
            <div className='placeCardSite grey'> 
                <FontAwesomeIcon 
                    className='placeCardIcon'
                    icon={faGlobeAmericas} />
               <span className='placeCarInfo site'>  https://chatak.com </span>
            </div>
            <div className='placeCardPhoneNumber grey'>
                <FontAwesomeIcon 
                    className='placeCardIcon'
                    icon={faMobileAlt} />
                <span className='placeCarInfo number'>  +996550 054450 </span>
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