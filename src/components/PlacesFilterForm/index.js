import React, { useState, useEffect } from 'react';
import { Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames'
import PlaceCard from '../PlaceCard'
import './filterform.scss';
import { customInputField } from '../CustomFields';

const PlacesFilterForm = props => {
  const { router, handleSubmit, changeFormValue, getPlacesStart, places } = props;
  console.log(router)
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [distanceUnit, setUnit] = useState('km');
  const [distanceValue, setValue] = useState(10)

  const checkCity = () => {
    if (router.query.location === 'bishkek' || 'Bishkek') {
      getPlacesStart('isOpen=true&_limit=12&citiesId=1')
    }
    if (router.query.location === 'osh' || 'Osh') {
      getPlacesStart('isOpen=true&_limit=12&citiesId=2')
    }
    if (router.query.location === 'kant' || 'Kant') {
      getPlacesStart('isOpen=true&_limit=12&citiesId=3')
    }
    if (router.query.location === 'karakol' || 'Karakol') {
      getPlacesStart('isOpen=true&_limit=12&citiesId=4')
    }
    if (router.query.location === 'jalal-abad' || 'Jalal-abad') {
      getPlacesStart('isOpen=true&_limit=12&citiesId=5')
    } 
    if (router.query.location === 'batken' || 'Batken') {
      getPlacesStart('isOpen=true&_limit=12&citiesId=6')
    } 
    if (router.query.location === 'tokmok' || 'Tokmot') {
      getPlacesStart('isOpen=true&_limit=12&citiesId=7')
    } 
    if (router.query.location === 'naryn' || 'Naryn') {
      getPlacesStart('isOpen=true&_limit=12&citiesId=8')
    } 
    if (router.query.location === 'talas' || 'Talas') {
      getPlacesStart('isOpen=true&_limit=12&citiesId=9')
    }    
    else {
      getPlacesStart('isOpen=true&_limit=12')
    }
  }

  useEffect(() => {
    changeFormValue('keywords', router.query.keywords)
    changeFormValue('location', router.query.location)
    checkCity()
  }, []);

  const tagsName = ['shop', 'hotel', 'restaurant', 'kid', 'pizza',
    'coffe', 'ckin care', 'spa', 'parking street',
    'outdoor seating', 'wireless internet', 'park',
    'massage therapy', 'venues', 'jewellery', 'fashion']

  return (
    <div
      className='filter-form'>
      <div className='container'>

        <form className='filter-form-wrapper'>
          <Field 
            placeholder='Keywords'
            className='filter-form__input keywords__input'
            type="text"
            name="keywords"
            component={customInputField}
          />
          <Field 
            placeholder='Location'
            className='filter-form__input'
            type="text"
            name="location"
            component={customInputField}
          />
          <input
            placeholder='Price'
            className='filter-form__input'
            type="text"
            id="price" />
          <select
            className='filter-form__select'
            id="orderlist"
            form="orderform">
            <option value="defaultoeders">Default Orders </option>
            <option value="aaaa">aaaa</option>
            <option value="bbbb">bbbb</option>
            <option value="cccc">cccc</option>
          </select>
          <select
            className='filter-form__select'
            id="categorieslist"
            form="categorieslform">
            <option value="all categories">All categories</option>
            <option value="hotels">Hotels</option>
            <option value="restaurants">Restaurants</option>
            <option value="bars">Bars</option>
            <option value="clubs">Clubs</option>
          </select>
        </form>
        <div className='filter-form-radius'>
          <div className='filter-form-radius__text__wrapper'>
            <span className='filter-form-radius__title'> Radius: </span>
            <p
              className='filter-form-radius__dictance__number'>
              {distanceUnit === 'm' ? distanceValue * 10 : distanceValue}
              {distanceUnit}
            </p>
            <select
              onChange={(event) => {
                setUnit(event.target.value)
              }}
              className='filter-form__select radius__select'
              name="categorieslist"
              form="categoriesform">
              <option value="km">kilomerts</option>
              <option value="m">meters</option>
            </select>
          </div>
          <div
            className='filter-form-radius-distance'>
            <div
              style={{ width: distanceValue - 1 + '%' }}
              className='filter-form-radius-distance__select__line' />
            <div className='filter-form-radius-distance__static__line' />
            <div className='filter-form-radius-distance__radio'>
              <p
                style={{ left: distanceValue - 1.7 + '%' }}
                className='filter-form-radius-distance__radio__point' />
              {[1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(key => (
                <div
                  key={key}
                  id={key}
                  onClick={(event) => setValue(event.target.id)}
                  className='filter-form-radius-distance__radio__part'>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='filter-form-checkboxs'>
          <p
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className='filter-form-checkboxs__title'>
            <span className='filter-form-checkboxs__title__text'>
              Filter by Tags
						</span>
            <FontAwesomeIcon
              className='filter-form-checkboxs__title__icon'
              icon={isFilterOpen ? faAngleUp : faAngleDown} />
          </p>
          {isFilterOpen && (
            <div
              className='filter-form-checkboxs__wrapper'>
              {tagsName.map(key => {
                return (
                  <div
                    key={key}
                    className='filter-form__checkbox'>
                    <input
                      className='filter-form__checkbox__input'
                      type="checkbox" />
                    <span
                      className='filter-form__checkbox__text'>
                      {key}
                    </span>
                  </div>)
              })}
            </div>
          )}
        <div
          className='place-cards-wrapper'>
          {places.places.slice(0, 8).map(placeObj => {
            return (
              <PlaceCard
                key={placeObj.id}
                place={placeObj}
              />
            )
          })}
        </div>
        </div>
      </div>
    </div>
  )
}

export default PlacesFilterForm;
