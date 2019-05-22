import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import PlaceCard from '../PlaceCard';
import './filterform.scss';
import { get } from 'https';


const FilterForm = props => {

  const { places } = props;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMouseDown, setpixels] = useState(false);
  const [distanceUnit, setUnit] = useState('km');
  const [distanceValue, setValue] = useState(10)

  const tagsName = ['shop', 'hotel', 'restaurant', 'kid', 'pizza',
    'coffe', 'ckin care', 'spa', 'parking street',
    'outdoor seating', 'wireless internet', 'park',
    'massage therapy', 'venues', 'jewellery', 'fashion']

  
  return (
    <div
      className='filter-form'>
      <div className='container'>

        <form className='filter-form-wrapper'>
          <input
            placeholder='Keywords'
            className='filter-form__input keywords__input'
            type="text"
            id="keywords" />
          <input
            placeholder='Location'
            className='filter-form__input'
            type="text"
            id="location" />
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
              {distanceUnit==='m'? distanceValue * 10 : distanceValue} 
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
              style={{ width: distanceValue + '%' }}
              id='filter-form-radius-distance__select__line'
              className='filter-form-radius-distance__select__line' />
            <div
              id='filter-form-radius-distance__static__line'
              className='filter-form-radius-distance__static__line' />
              <div className='filter-form-radius-distance__radio'>
                {[1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(key=>(
                  <div    key={key}>
                    <div
                      id={key} 
                      onClick={()=>setValue(event.target.id)}
                      className='filter-form-radius-distance__radio__point'/>
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
          {
            isFilterOpen && (
              <form
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
                    </div>
                  )
                })}
              </form>
          )}
        </div>
        <div className='filter-form-cards-wrapper'>
          {places.slice(0, 12).map(placeObj => {
            return (
              <PlaceCard
                key={placeObj.name}
                place={placeObj}
              />
            )
          })}
        </div>
        <div className="pages-numbers">
          {[1, 2, 3, 4, 5].map(key=>(
            <button
              key={key} 
              className="pages-numbers__button">
              {key}
          </button>
          ))}
          <button className="pages-numbers__button">
            Next 
            <FontAwesomeIcon
              className='pages-numbers__button__icon'
              icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterForm;
