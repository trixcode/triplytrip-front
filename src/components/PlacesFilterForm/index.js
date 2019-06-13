import React, { useState, useEffect } from 'react';
import { Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import PlaceCard from '../PlaceCard'
import './filterform.scss';
import { customInputField } from '../CustomFields';
import useDebounce from '../customHooks/useDebounce';


const PlacesFilterForm = props => {
  const { changeFormValue, getPlacesStart, places, cities, myValues, categories, location } = props;
  
  let params = new URLSearchParams(location.search)

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [distanceUnit, setUnit] = useState('km');
  const [distanceValue, setValue] = useState(10)

  const reqLocation = params.get('location')
  const keywords = params.get('keywords')
  const category = params.get('category')
  
  const keywordsChanged = myValues.keywords === undefined ? '' : myValues.keywords === null ? '' : myValues.keywords
  const locationChanged = myValues.location === undefined ? '' : myValues.location === null ? '' : myValues.location
  const categoryChanged = myValues.categoriesForm 
  
  const checkCity = () => {
    const currentLocation = locationChanged && locationChanged.charAt(0).toUpperCase() + locationChanged.slice(1)
    const citiId = currentLocation === '' ? {id: 0} : cities.find(city => city.name === currentLocation ? city.id : null)
    const categoryId = categoryChanged === null ? '' : categoryChanged === 'all categories' ? '' : 
    categories.find(category => category.name === categoryChanged ? category.id : '')
    
    const idOfCategory = categoryChanged === null ? '' : categoryChanged === 'all categories' ? '' : `&categoriesId=${categoryId && categoryId.id}`
    const idOfCity = !citiId ? 'citiesId=10' : citiId.id === 0 ? '' : citiId === '' ? '' : `citiesId=${citiId && citiId.id}`
    getPlacesStart(`isOPen=true&_limit=12&${idOfCity}&q=${keywordsChanged}${idOfCategory}`)
  }
  const debouncedSearchTerm = useDebounce(myValues, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      checkCity()
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    changeFormValue('keywords', keywords)
    changeFormValue('location', reqLocation)
    changeFormValue('categoriesForm', category)
  }, [])
  

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
          <Field
            className='filter-form__select'
            component="select"
            name="categoriesForm"
            >
            <option value="all categories">All categories</option>
            {categories.map(categories => (
              <option key={categories.id}>{categories.name}</option>
            )) }
          </Field>
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
          {places.places.map(placeObj => {
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
