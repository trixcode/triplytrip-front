import React, { useState, useEffect } from 'react';
import { Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames'
import PlaceCard from '../PlaceCard'
import './filterform.scss';
import { customInputField } from '../CustomFields';

const PlacesFilterForm = props => {
  const { router, handleSubmit, changeFormValue, getPlacesStart, places, cities } = props;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [distanceUnit, setUnit] = useState('km');
  const [distanceValue, setValue, useLayoutEffect] = useState(10)

  const { keywords, location } = router.query

  const checkCity = () => {
    const currentLocation = location.charAt(0).toUpperCase() + location.slice(1)
    const citiId = cities.find(city => city.name === currentLocation ? city.id : '')
    getPlacesStart(`isOPen=true&_limit=12&citiesId=${citiId && citiId.id}&q=${keywords === 'undefined' ? '' : keywords}`)
  }

  useEffect(() => {
    changeFormValue('keywords', keywords)
    changeFormValue('location', location)
    checkCity()
  });

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
