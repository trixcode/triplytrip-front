
import { Field, reduxForm } from 'redux-form';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faInstagram, faFacebook, faPinterest,
  faLinkedin, faVimeo, faWhatsapp, faGooglePlus,
  faTumblr, faFlickr, faWikipediaW, faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import './listingForm.scss'


const ListingForm = (props) => {
  const { handleSubmit, pristine, reset, submitting  } = props;
  const socialsArray = [faTwitter, faInstagram, faFacebook, faPinterest,
    faLinkedin, faVimeo, faWhatsapp, faGooglePlus,
    faTumblr, faFlickr, faWikipediaW, faYoutube,]

  return (
  <form onSubmit={handleSubmit} className='listing'>
      <div className='container'>
        <div className='listing-location'>
          <div className='listing-forms'>
            <div className='listing-form'>
              <label className='listing-form__title'>listing title</label>
             <div >
               <Field
                  className='listing-form__input'
                  name="firstName"
                  component="input"
                  type="text"
                />
              </div>
            </div>
            <div className='listing-form'>
              <label className='listing-form__title'>listing categories</label>
              <div >
                <Field
                  name="categories"
                  component="select"
                  className='listing-form__input'>
                  <option />
                  <option className='listing-form__input__select__value' value="hotel">hotel</option>
                  <option className='listing-form__input__select__value' value="cafe">cafe</option>
                  <option className='listing-form__input__select__value' value="restaurant">restaurant</option>
                </Field>
              </div>
            </div>
            <div className='listing-form'>
              <label className='listing-form__title'>listing location</label>
              <div >
                <Field
                  className='listing-form__input '
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Bishkek"
                />
              </div>
            </div>
            <div className='listing-form'>
              <label className='listing-form__title'>google address</label>
              <div >
                <Field
                  className='listing-form__input'
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Listing address"
                />
              </div>
            </div>
          </div>
          <div className='listing-google-map'>
            <div className='listing-google-map__arrow' />
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyCUKPCvf0qLNJDOZipKnFGPOM-x-dAKKOg',
                language: 'ru',
                region: 'kg',
              }}
              defaultCenter={{
                lat: 42.84,
                lng: 74.56
              }}
              defaultZoom={11}>
              {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
            </GoogleMapReact>
          </div>
        </div>
        <h3 className='listing__title'>price segmentation</h3>
        <div
          className='listing-row-inputs-forms'
          onSubmit={handleSubmit}>
          <div className='listing-row-inputs-form'>
            <label className='listing-form__title'>segmentation</label>
            <div >
              <Field
                name="categories"
                component="select"
                className='listing-form__input'>
                <option className='listing-form__input__select__value' value="KGS">KGS</option>
                <option className='listing-form__input__select__value' value="USD">USD</option>
                <option className='listing-form__input__select__value' value="EUR">EUR</option>
              </Field>
            </div>
          </div>
          <div className='listing-row-inputs-form'>
            <label className='listing-form__title'>minimum price</label>
            <div >
              <Field
                className='listing-form__input'
                name="min-price"
                component="input"
                type="number"
              />
            </div>
          </div>
          <div className='listing-row-inputs-form'>
            <label className='listing-form__title'>maximum price</label>
            <div >
              <Field
                className='listing-form__input'
                name="max-price"
                component="input"
                type="number"
              />
            </div>
          </div>
        </div>

        <h3 className='listing__title'>logo</h3>
        <div className='listing-image-logo__wrapper'>
          <FontAwesomeIcon
            className='listing-image__icon'
            icon={faImage} />
        </div>
        <div className='listing-featured-image'>
          <FontAwesomeIcon
            className='listing-image__icon'
            icon={faImage} />
          <span className='listing-featured-image__text'>Featured Image</span>
        </div>
        <h3 className='listing__title'>listing content</h3>
        <Field
          className='listing-content__wysiwyg'
          name="notes"
          component="textarea" />
        <h3 className='listing__title'>listing information</h3>
        <span className='listing__information__text'>
          Skip this step if you want to display your profile information.
        </span>
 
        <div className='listing-information'>
          <div className='listing-row-inputs-forms'> 
            <div className='listing-row-inputs-form'>
              <label className='listing-form__title'>phone</label>
              <div >
                <Field
                  className='listing-form__input'
                  name="min-price"
                  component="input"
                  type="number"
                  placeholder="Rather not say" />
              </div>
            </div>
            <div className='listing-row-inputs-form'>
              <label className='listing-form__title'>website</label>
              <div >
                <Field
                  className='listing-form__input'
                  name="max-price"
                  component="input"
                  type="number" />
              </div>
            </div>
            <div className='listing-row-inputs-form'>
              <label className='listing-form__title'>email</label>
              <div >
                <Field
                  className='listing-form__input'
                  name="max-price"
                  component="input"
                  type="number" />
              </div>
            </div>
          </div>

          <div className='listing-social'>
          {socialsArray.map((iconIndex) => (
            <div key={iconIndex.iconName} className='listing-social-wrapper'>
              <label className='listing-form__title'>{iconIndex.iconName}</label>
              <div className='listing-social-form'>
                <span className='listing-social__icon__wrapper'>
                  <FontAwesomeIcon
                    className={`listing-social__icon listing-social__icon__${iconIndex.iconName}`}
                    icon={iconIndex} />
                </span>
                <Field
                  className='listing-form__input'
                  name="max-price"
                  component="input"
                  type="number" />
              </div>
            </div>
          ))}
            
          </div>
        </div>
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'simple'
})(ListingForm) 