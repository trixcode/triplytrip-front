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
  
  const setPointPosition = () => {
    const distanceStaticLineLeftSide = document.getElementById('filter-form-radius-distance__static__line')
    const point = document.getElementById('filter-form-radius-distance__point')
    const selectLine = document.getElementById('filter-form-radius-distance__select__line')
    if (event.x > distanceStaticLineLeftSide.getBoundingClientRect().left && event.x < distanceStaticLineLeftSide.getBoundingClientRect().right) {
      point.style.left = event.x - distanceStaticLineLeftSide.getBoundingClientRect().left - 7 + 'px';
      selectLine.style.width = event.x - distanceStaticLineLeftSide.getBoundingClientRect().left - 7 + 'px';
    }
    point.ondragstart = function () {
      return false;
    };
  }

  const setDistance = (unit) => {
    const staticLine = document.getElementById('filter-form-radius-distance__static__line').getBoundingClientRect().width;
    const pointLeft = 7 + parseInt(document.getElementById('filter-form-radius-distance__point').style.left)
    const persent = Math.round(pointLeft * 100 / staticLine);
    if (unit === 'km') {
      return Math.round((100 - 1) / 100 * persent + 1)
    }
    else if (unit === 'm') {
      return Math.round(((900 - 10) / 100 * persent + 10) / 10) * 10
    }
  }

  useEffect(()=>{
    Object.keys(document.querySelectorAll('.place-card__button')).map(key=>{
      document.querySelectorAll('.place-card__button')[key].style.backgroundColor = '#e5f8fb';
    });
  })
  
  return (
    <div
      onMouseUp={() => setpixels(false)}
      onMouseMove={() => {
        if (isMouseDown) {
          setPointPosition()
          setValue(setDistance(distanceUnit))
        }
      }}
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
              {distanceValue} 
              {distanceUnit} 
            </p>
            <select
              onChange={(event) => {
                setUnit(event.target.value)
                setValue(setDistance(event.target.value))
              }}
              className='filter-form__select radius__select'
              name="categorieslist"
              form="categoriesform">
              <option value="km">kilomerts</option>
              <option value="m">meters</option>
            </select>
          </div>

          <div
            onMouseDown={() => setpixels(true)}
            className='filter-form-radius-distance'>
            <div
              style={{ left: '100px' }}
              id='filter-form-radius-distance__point'
              className='filter-form-radius-distance__point' />
            <div
              style={{ width: '100px' }}
              id='filter-form-radius-distance__select__line'
              className='filter-form-radius-distance__select__line' />
            <div
              id='filter-form-radius-distance__static__line'
              className='filter-form-radius-distance__static__line' />
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
