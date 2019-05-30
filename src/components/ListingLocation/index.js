import React from 'react';
import { Field, reduxForm } from 'redux-form';
import GoogleMapReact from 'google-map-react';

import './listingLocation.scss'

const ListingLocation = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form
      className='listing-location' 
      onSubmit={handleSubmit}>
      <div className='listing-location-forms'>
        <div className='listing-location-form'>
          <label className='listing-location-form__title'>listing title</label>
          <div >
            <Field
              className='listing-location-form__input'
              name="firstName"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className='listing-location-form'>
          <label className='listing-location-form__title'>listing categories</label>
          <div >
            <Field name="categories" component="select" className='listing-location-form__input'>
            <option />
            <option value="hotel">hotel</option>
            <option value="cafe">cafe</option>
            <option value="restaurant">restaurant</option>
          </Field>
          </div>
        </div>
        <div className='listing-location-form'>
          <label className='listing-location-form__title'>listing location</label>
          <div >
            <Field
              className='listing-location-form__input '
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className='listing-location-form'>
          <label className='listing-location-form__title'>google address</label>
          <div >
            <Field
              className='listing-location-form__input'
              name="email"
              component="input"
              type="email"
              placeholder="Listing address"
            />
          </div>
        </div>
      </div>
      <div className='listing-location-google-map'>
        <div className='listing-location-google-map__arrow'/>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCUKPCvf0qLNJDOZipKnFGPOM-x-dAKKOg',
            language: 'ru',
            region: 'kg', }}
          defaultCenter={{
            lat: 42.84,
            lng: 74.56
          }}
          defaultZoom={11}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' 
})(ListingLocation)