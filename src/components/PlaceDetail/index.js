import './placeDetail.scss';
import { useState, useEffect } from 'react';
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobeAmericas, faMobileAlt, faDollarSign, faEnvelope, faCameraRetro, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGooglePlusG, faTumblr, faInstagram, faLinkedinIn, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import PlaceDetailContactFormContainer from '../../containers/PlaceDetailContactForm';
function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}
const PlaceDetail = (props) => {
  const { getPlaceDetailByIdStart, router, placeDetail } = props;
  useEffect(() => {
    getPlaceDetailByIdStart(router.query.placeId)
  }, []);
  const [isOverviewClicked, setOverview] = useState(true)
  const [isContactClicked, setContact] = useState(false)
  const [isReviewsClicked, setReview] = useState(false)
  const [isVideoClicked, setVideo] = useState(false)
  
  const switchTabs =(a, b, c, d) => {
    a(true)
    b(false)
    c(false)
    d(false)
  }
  const selectedClass = 'main-info-tabs__tab_selected'
  const defaultClass = 'main-info-tabs__tab'

  const overview = 
      <div  className="overview">
      
        <div className="overview__text" dangerouslySetInnerHTML={{__html: placeDetail.description}} />
        <h2 className="overview__title">{placeDetail.name}</h2>

        <div className="overview__pics"></div>

        <div className="overview__text" dangerouslySetInnerHTML={{__html: placeDetail.extraDescription}} />

        <div className="overview__save"></div>
      </div>

  const contact = 
      <div className="contact">
        <div className= "sidebars-form-wrapper">
            <div>
                <span>Your Name</span>
                <input type="text" />
              </div>
              <div>
                <span>Your Email</span>
                <input type="email" />
              </div>
              <div>
                <span>Subject</span>
                <input type="text" />
              </div>
              <div>
                <span>Your Message</span>
                <input type="text" />
              </div>
              <button className="sidebars-button">Submit</button>
        </div>
        <div className="contact-map">There must be a map here</div>
      </div>

  const reviews = <h2>Reviews</h2>

  const video = 
      <div className="video">
        <div>There must be a video here</div>
      </div>

  return (
    <section className="place-detail">
    {
      !isEmpty(placeDetail) && (
        <div className="place-detail-container container">
        <div className="main-info">
          <div className="main-info-tabs">
            <button id="overview" onClick={() =>
              switchTabs(setOverview, setVideo, setReview, setContact)}
              className={isOverviewClicked ? classNames(defaultClass, selectedClass) : defaultClass}>
              Overview
            </button>
            <button id="contact" onClick={() =>
              switchTabs(setContact, setOverview, setReview, setVideo)}
              className={isContactClicked ? classNames(defaultClass, selectedClass) : defaultClass}>
              Contact
            </button>
            <button id="reviews" onClick={() =>
              switchTabs(setReview, setVideo, setOverview, setContact)}
              className={isReviewsClicked ? classNames(defaultClass, selectedClass) : defaultClass}>
              Reviews & Rating
            </button>
            <button id="video" onClick={() =>
              switchTabs(setVideo, setOverview, setReview, setContact)}
              className={isVideoClicked ? classNames(defaultClass, selectedClass) : defaultClass}>
              Video
            </button>
          </div>
          {isOverviewClicked ? overview : ''}
          {isContactClicked ? contact : ''}
          {isReviewsClicked ? reviews : ''}
          {isVideoClicked ? video : ''}
        </div>

        <aside className="sidebar">
          <div className="sidebar-owner-info">
            <div className="sidebar-owner-info__avatar"></div>
            <span className="sidebar-owner-info__name">
              {`${placeDetail.user.firstName} ${placeDetail.user.lastName}`}
            </span>
            <span className="sidebar-owner-info__status">Editor</span>
            <div className="sidebar-owner-info__followers">
              <div>
                <span>Followers</span>
                <span>120</span>
              </div>
              <div>
                <span>Following</span>
                <span>10</span>
              </div>
            </div>
            <span className="sidebar-owner-info__follow">Follow<FontAwesomeIcon icon={faWifi} /></span>

          </div>
          <div className="sidebar-owner-contacts">
            <ul className="sidebar-owner-contacts-info">
              <li><FontAwesomeIcon icon={faMapMarkerAlt} className="sidebar-owner-contacts-info__icon" />Montana, USA</li>
              <li><FontAwesomeIcon icon={faGlobeAmericas} className="sidebar-owner-contacts-info__icon" />http://masttbigbreakfast.com/</li>
              <li><FontAwesomeIcon icon={faMobileAlt} className="sidebar-owner-contacts-info__icon" />+1234 567 8910</li>
            </ul>
            <ul className="sidebar-owner-contacts-networks">
              <li><div className="sidebar-facebook"><FontAwesomeIcon icon={faFacebookF} className="owner-contact-icon" /></div></li>
              <li><div className="sidebar-twitter"><FontAwesomeIcon icon={faTwitter} className="owner-contact-icon" /></div></li>
              <li><div className="sidebar-google"><FontAwesomeIcon icon={faGooglePlusG} className="owner-contact-icon" /></div></li>
              <li><div className="sidebar-insta"><FontAwesomeIcon icon={faInstagram} className="owner-contact-icon" /></div></li>
            </ul>
            <div className="sidebars-button">Visit Website</div>
          </div>
          <div className="sidebar-price">
            <div className="sidebars-title">
              <div><FontAwesomeIcon icon={faDollarSign} /></div><h5>Price Range</h5>
            </div>
            <span>Price: </span><span className="sidebar-price__price"> $100 - $300</span>
          </div>
          <div className="sidebar-contact-me">
            <div className="sidebars-title">
              <div><FontAwesomeIcon icon={faEnvelope} /></div><h5>Contact Me</h5>
            </div>
            <PlaceDetailContactFormContainer />
          </div>
          <div className="sidebar-map">
            <div className="sidebars-title">
              <div><FontAwesomeIcon icon={faMapMarkerAlt} /></div><h5>Map</h5>
            </div>
          </div>
          <div className="sidebar-gallery">
            <div className="sidebars-title">
              <div><FontAwesomeIcon icon={faCameraRetro} /></div><h5>Gallery</h5>
            </div>
          </div>
          <div className="sidebar-subscribe">
            <div className="sidebars-title">
              <div><FontAwesomeIcon icon={faEnvelope} /></div><h5>Subscribe</h5>
            </div>
            <span>Subscribe us and never miss our new<br /> articles</span><br />
            <input type="email" placeholder="Enter Your Email" /><button><FontAwesomeIcon icon={faTelegramPlane} /></button>
          </div>
        </aside>
      </div>
      )
    }

    </section>
  )
}

export default PlaceDetail