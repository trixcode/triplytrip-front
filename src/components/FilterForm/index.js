import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import PlaceCard from '../PlaceCard';
import './filterform.scss';

const tagsName = ['shop', 'hotel', 'restaurant', 'kid', 'pizza',
  'coffe', 'ckin care', 'spa', 'parking street',
  'outdoor seating', 'wireless internet', 'park',
  'massage therapy', 'venues', 'jewellery', 'fashion']

const FilterForm = props => {
  const { places } = props;
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className='filter-form'>
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
          <span className='filter-form-radius__title'>Radius: 10 km</span>
          <select
            className='filter-form__select radius__select'
            name="categorieslist"
            form="categorieslform">
            <option value="milomerts">milomerts</option>
            <option value="meters">meters</option>
            <option value="miles">miles</option>
          </select>
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
            )
          }

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

      </div>
    </div>
  )
}

export default FilterForm;
