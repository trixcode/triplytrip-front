import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faUserFriends, faExclamationTriangle, faShareAlt, faHeart, faEnvelope} from '@fortawesome/free-solid-svg-icons';


import './DetailPostTop.scss';


const DetailPostTop=(props)=> {
  const interactiveIcons = [faUser, faUserFriends, faExclamationTriangle, faShareAlt, faHeart, faEnvelope];
  const { p } = props;

  return (
    <div className='detail-post-top'>
      <div className='detail-post-top_image_wrapper'>
        <img 
          className='detail-post-top_image'
          src='https://img2.goodfon.com/original/1920x1279/e/fb/grand-budapest-hotel-gorod.jpg' 
          alt='hotel'/>
      </div>
      <div className='detail-post-top-place'>
        <div className='container'>
          <div className='detail-post-top-place-wrapper'>
              <h2 
                className='detail-post-top-place_name'>
                the hoxton hotel
              </h2>
              <div className='detail-post-top-place-content'>
                <div  className='detail-post-top-place-info'>
                  <div  className='detail-post-top-place-info__wrapper wrapper_right_line'>
                    <span 
                      className='detail-post-top-place-info__posted__text'>
                      Posted on
                    </span>
                    <span 
                      className='detail-post-top-place-info__posted__date'>
                      May 09 2017 
                    </span>
                  </div>
                  <div  className='detail-post-top-place-info__wrapper wrapper_right_line'>
                    <span 
                      className='detail-post-top-place-info__category__text'>
                      Category
                    </span>
                    <span 
                      className='detail-post-top-place-info__category__name'>
                      Hotel 
                    </span>
                  </div>
                  <div  className='detail-post-top-place-info__wrapper'>
                    <span 
                      className='detail-post-top-place-info__rating__text'>
                      Rating
                    </span>
                    <div className='detail-post-top-place-info__rating__icons'>
                      {[1, 2, 3, 4, 5].map(key => (
                        <FontAwesomeIcon
                          key={key}
                          className={key <= 5 ?
                            classNames('detail-post-top-place-info__rating__icon active') :
                            'detail-post-top-place-info__rating__icon'}
                          icon={faStar} />)
                        )}
                        <p className='detail-post-top-place-info__rating__number'>
                            
                        </p>
                    </div>


                  </div>
                </div>
                <div className='detail-post-top-place-interactive'>
                  {interactiveIcons.map(key => (
                    <p     
                      key={key}
                      className='detail-post-top-place-interactive__icon'>
                      <FontAwesomeIcon
                        icon={key} />
                    </p>
                    )
                  )}
                </div>
              </div>
              
            </div>
       
          </div>

      </div>
    </div>
  )
}

export default DetailPostTop