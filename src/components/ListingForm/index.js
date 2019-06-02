
import { Field, reduxForm } from 'redux-form';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faInstagram, faFacebook, faPinterest,
  faLinkedin, faVimeo, faWhatsapp, faGooglePlus,
  faTumblr, faFlickr, faWikipediaW, faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faImage, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Dropzone from 'react-dropzone';
import React, { useState, useEffect } from 'react';


import './listingForm.scss'

const ListingForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const socialsArray = [faTwitter, faInstagram, faFacebook, faPinterest,
    faLinkedin, faVimeo, faWhatsapp, faGooglePlus,
    faTumblr, faFlickr, faWikipediaW, faYoutube,];

  const [logoImage, onDropLogo] = useState(null);
  const [imageFiles, onDropImages] = useState([]);

  const handleDrob = (logoFile) => {
    onDropLogo(logoFile)

    console.log(imageFiles)
  }

  return (
    <form onSubmit={handleSubmit} className='listing'>
      <div className='container'>
        <div className='listing-wrapper'>

          <div className='listing-location'>
            <div className='listing-location-forms'>
              <div className='listing-form'>
                <label className='listing-form__title'>listing title</label>
                <div >
                  <Field
                    className='listing-form__input'
                    name="listing-title"
                    component="input"
                    type="text" />
                </div>
              </div>
              <div className='listing-form'>
                <label className='listing-form__title'>listing categories</label>
                <div >
                  <Field
                    name="listing-categories"
                    component="select"
                    className='listing-form__input'>
                    <option />
                    <option
                      className='listing-form__input__select__value'
                      value="hotel">hotel</option>
                    <option
                      className='listing-form__input__select__value'
                      value="cafe">cafe</option>
                    <option
                      className='listing-form__input__select__value'
                      value="restaurant">restaurant</option>
                  </Field>
                </div>
              </div>
              <div className='listing-form'>
                <label className='listing-form__title'>listing location</label>
                <div >
                  <Field
                    className='listing-form__input '
                    name="listing-location"
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
                    name="google-address"
                    component="input"
                    type="email"
                    placeholder="Listing address"
                  />
                </div>
              </div>
            </div>
            <div className='listing-google-map'>

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

          <div className='listing-forms-wrapper'>
            <h3 className='listing__title'>price segmentation</h3>
            <div
              className='listing-row-inputs-forms'
              onSubmit={handleSubmit}>
              <div className='listing-row-inputs-form'>
                <label className='listing-form__title'>segmentation</label>
                <div >
                  <Field
                    name="segmentation"
                    component="select"
                    className='listing-form__input'>
                    <option
                      className='listing-form__input__select__value'
                      value="KGS">KGS</option>
                    <option
                      className='listing-form__input__select__value'
                      value="USD">USD</option>
                    <option
                      className='listing-form__input__select__value'
                      value="EUR">EUR</option>
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
          </div>

          <div className='listing-forms-wrapper'>
            <h3 className='listing__title'>logo</h3>

            <Dropzone
              multiple={false}
              noClick={logoImage ? true : false}
              accept="image/*"
              onDrop={(logoFile) => onDropLogo(logoFile)}>
              {({ getRootProps, getInputProps }) => (
                <div
                  className='listing-image-load listing-image-load__logo'
                  {...getRootProps()}>
                  <span
                    onClick={() => onDropLogo(null)}
                    style={{ display: !logoImage ? 'none' : 'flex' }}
                    className='listing-image__logo__icon_delet'> X </span>
                  <input
                    className='listing__drop__input'
                    name="logoDrop"
                    {...getInputProps()} />
                  {logoImage && <img src={URL.createObjectURL(logoImage[0])} alt='logo' className='listing-image__logo' />}
                  <FontAwesomeIcon
                    style={{ display: logoImage ? 'none' : 'flex' }}
                    className='listing-image__logo__icon'
                    icon={faImage} />
                </div>
              )}
            </Dropzone>

            
           
            
            <Dropzone
              noClick={true}
              onDrop={(images) => onDropImages(imageFiles.concat(...images))}>
              {({ getRootProps, getInputProps }) => (
                <div 
                  className='listing-featured-image'
                  {...getRootProps()}>
                  
                  {imageFiles.length > 0 && imageFiles.map((file, index) =>
                    <div
                      key={file.name}
                      className='listing-image__files'>
                      <span
                        onClick={() => { imageFiles.splice(index, 1) }}
                        className='listing-image__logo__icon_delet'> X </span>
                      <img
                        src={URL.createObjectURL(file)}
                        alt='image'
                        className='listing-image__files__file' />
                    </div>
                  )}
                  <div 
                    className='listing-featured__icon__wrapper'
                    {...getRootProps()}>
              
                    <input
                      className='listing__drop__input'
                      name="logoDrop"
                      {...getInputProps()} />
                    <FontAwesomeIcon
                      className='listing-image__files__icon '
                      icon={faImage} />
                    <span className='listing-featured-image__text'>Featured Image</span>
                  </div>
                </div>
              )}
              </Dropzone>
            


          </div>

          <div className='listing-forms-wrapper'>
            <h3 className='listing__title'>listing content</h3>
            <div className='listing-form'>
              <label className='listing-form__title'>short description</label>
              <Field
                className='listing-content__wysiwyg listing-content__wysiwyg_short'
                name="extraDescription"
                component="textarea" />
            </div>
            <div className='listing-form'>
              <label className='listing-form__title'>full description</label>
              <Field
                className='listing-content__wysiwyg'
                name="description"
                component="textarea" />
            </div>
          </div>

          <div className='listing-forms-wrapper'>
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
                      name="phone"
                      component="input"
                      type="text"
                      placeholder="Rather not say" />
                  </div>
                </div>
                <div className='listing-row-inputs-form'>
                  <label className='listing-form__title'>website</label>
                  <div >
                    <Field
                      className='listing-form__input'
                      name="website"
                      component="input"
                      type="text" />
                  </div>
                </div>
                <div className='listing-row-inputs-form'>
                  <label className='listing-form__title'>email</label>
                  <div >
                    <Field
                      className='listing-form__input'
                      name="email"
                      component="input"
                      type="text" />
                  </div>
                </div>
              </div>
              <div className='listing-social'>
                {socialsArray.map((iconIndex) => (
                  <div
                    key={iconIndex.iconName}
                    className='listing-social-wrapper'>
                    <label className='listing-form__title'>{iconIndex.iconName}</label>
                    <div className='listing-social-form'>
                      <span className='listing-social__icon__wrapper'>
                        <FontAwesomeIcon
                          className={`listing-social__icon listing-social__icon__${iconIndex.iconName}`}
                          icon={iconIndex} />
                      </span>
                      <Field
                        className='listing-form__input'
                        name={iconIndex.iconName}
                        component="input"
                        type="text" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='listing-forms-wrapper'>
            <div className='listing-row-inputs-form'>
              <label className='listing-form__title'>Listing tags</label>
              <div >
                <Field
                  name="Listing-tags"
                  component="select"
                  className='listing-form__input'>
                  <option />
                  <option
                    className='listing-form__input__select__value'
                    value="tag">tag</option>
                  <option
                    className='listing-form__input__select__value'
                    value="tag">tag</option>
                  <option
                    className='listing-form__input__select__value'
                    value="tag">tag</option>
                </Field>
              </div>
            </div>
          </div>

          <div className='listing-forms-wrapper'>
            <h3 className='listing__title'>listing gallery</h3>
            <div className='listing-image-load'>
              <FontAwesomeIcon
                className='listing-image__icon'
                icon={faImage} />
            </div>
          </div>

          <div className='listing-forms-wrapper'>
            <h3 className='listing__title'>open table</h3>
            <div className='listing-row-inputs-form'>
              <label className='listing-form__title'>restaurant name</label>
              <div >
                <Field
                  className='listing-form__input'
                  name="restaurant-name"
                  component="input"
                  type="text" />
              </div>
            </div>
          </div>

          <div className='listing-forms-wrapper'>
            <h3 className='listing__title'>coupon</h3>
            <div className='listing-row-inputs-forms'>
              <div className='listing-row-inputs-form'>
                <label className='listing-form__title'>description</label>
                <div >
                  <Field
                    className='listing-form__input'
                    name="description"
                    component="input"
                    type="text" />
                </div>
              </div>
              <div className='listing-row-inputs-form'>
                <label className='listing-form__title'>Coupon code</label>
                <div >
                  <Field
                    className='listing-form__input'
                    name="Coupon-code"
                    component="input"
                    type="text" />
                </div>
              </div>
              <div className='listing-row-inputs-form'>
                <label className='listing-form__title'>referral link</label>
                <div >
                  <Field
                    className='listing-form__input'
                    name="referral-link"
                    component="input"
                    type="text" />
                </div>
              </div>
            </div>
          </div>

          <div className='listing-preview'>
            <button
              className='listing-preview__button'
              type="Submit"
              disabled={pristine || submitting}>
              Preview
          </button>
          </div>

        </div>
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'simple'
})(ListingForm) 