/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, Fragment } from 'react';
import { Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import PlaceCard from '../PlaceCard';
import './filterform.scss';
import customInputField from '../CustomFields';
import useDebounce from '../customHooks/useDebounce';
import PlagesTopTitle from '../PagesTopTitle';


const PlacesFilterForm = (props) => {
  const {
    changeFormValue, getPlacesStart, places, cities, myValues, categories, location,
  } = props;
  const params = new URLSearchParams(location.search);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [distanceUnit, setUnit] = useState('km');
  const [distanceValue, setValue] = useState(10);

  const reqLocation = params.get('location');
  const keywords = params.get('keywords');
  const category = params.get('category');

  const keywordsChanged = myValues.keywords === undefined ? '' : myValues.keywords === null ? '' : myValues.keywords;
  const locationChanged = myValues.location === undefined ? '' : myValues.location === null ? '' : myValues.location;
  const categoryChanged = myValues.categoriesForm;

  const search = () => {
    // FIND BY CATEGORY
    const categoryId = categoryChanged === null ? '' : categoryChanged === 'all categories' ? ''
      : categories.find(categoryOf => (categoryOf.name === categoryChanged ? categoryOf._id : ''));
    const idOfCategory = categoryId === undefined ? '' : `category=${categoryId && categoryId._id}`;
    // FIND BY LOCATION
    const currentLocation = locationChanged && locationChanged.charAt(0).toUpperCase() + locationChanged.slice(1);
    const cityId = currentLocation === '' ? ''
      : cities.find(city => (city.name === currentLocation ? city._id : ''));
    const ifOfCity = cityId === '' ? '' : cityId === undefined ? '&cities=therisnocity' : `&cities=${cityId && cityId.id}`;
    // FIND BY KEYWORDS
    const keyword = keywordsChanged === '' ? '' : `&search=${keywordsChanged}`;

    getPlacesStart(`${idOfCategory}${ifOfCity}${keyword}`);
  };
  const debouncedSearchTerm = useDebounce(myValues, 550);

  useEffect(() => {
    if (debouncedSearchTerm) {
      search();
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    changeFormValue('keywords', keywords);
    changeFormValue('location', reqLocation);
    changeFormValue('categoriesForm', category);
    window.scrollTo(0, 0);
  }, []);


  const tagsName = ['shop', 'hotel', 'restaurant', 'kid', 'pizza',
    'coffe', 'ckin care', 'spa', 'parking street',
    'outdoor seating', 'wireless internet', 'park',
    'massage therapy', 'venues', 'jewellery', 'fashion'];

  return (
    <Fragment>
      <PlagesTopTitle title={locationChanged || categoryChanged} link={['home', 'search']} />
      <div
        className="filter-form"
      >
        <div className="container">

          <form className="filter-form-wrapper">
            <Field
              placeholder="Ключевое слово"
              className="filter-form__input keywords__input"
              type="text"
              name="keywords"
              component={customInputField}
            />
            <Field
              placeholder="Местоположение"
              className="filter-form__input"
              type="text"
              name="location"
              component={customInputField}
            />
            <input
              placeholder="Цена"
              className="filter-form__input"
              type="text"
              id="price"
            />
            <select
              className="filter-form__select"
              id="orderlist"
              form="orderform"
            >
              <option value="defaultoeders">Заказы по умолчанию</option>
              <option value="aaaa">aaaa</option>
              <option value="bbbb">bbbb</option>
              <option value="cccc">cccc</option>
            </select>
            <Field
              className="filter-form__select"
              component="select"
              name="categoriesForm"
            >
              <option value="all categories">Все категории</option>
              {categories.map(categorie => (
                <option key={categorie._id}>{categorie.name}</option>
              ))}
            </Field>
          </form>
          <div className="filter-form-radius">
            <div className="filter-form-radius__text__wrapper">
              <span className="filter-form-radius__title"> Радиус: </span>
              <p
                className="filter-form-radius__dictance__number"
              >
                {distanceUnit === 'm' ? distanceValue * 10 : distanceValue}
                {distanceUnit}
              </p>
              <select
                onChange={(event) => {
                  setUnit(event.target.value);
                }}
                className="filter-form__select radius__select"
                name="categorieslist"
                form="categoriesform"
              >
                <option value="км">километров</option>
                <option value="м">метров</option>
              </select>
            </div>
            <div
              className="filter-form-radius-distance"
            >
              <div
                style={{ width: `${distanceValue - 1}%` }}
                className="filter-form-radius-distance__select__line"
              />
              <div className="filter-form-radius-distance__static__line" />
              <div className="filter-form-radius-distance__radio">
                <p
                  style={{ left: `${distanceValue - 1.7}%` }}
                  className="filter-form-radius-distance__radio__point"
                />
                {[1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(key => (
                  <div
                    role="presentation"
                    key={key}
                    id={key}
                    onClick={event => setValue(event.target.id)}
                    className="filter-form-radius-distance__radio__part"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="filter-form-checkboxs">
            <p
              role="presentation"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="filter-form-checkboxs__title"
            >
              <span className="filter-form-checkboxs__title__text">
                Фильтр по Тэгам

              </span>
              <FontAwesomeIcon
                className="filter-form-checkboxs__title__icon"
                icon={isFilterOpen ? faAngleUp : faAngleDown}
              />
            </p>
            {isFilterOpen && (
              <div
                className="filter-form-checkboxs__wrapper"
              >
                {tagsName.map(key => (
                  <div
                    key={key}
                    className="filter-form__checkbox"
                  >
                    <input
                      className="filter-form__checkbox__input"
                      type="checkbox"
                    />
                    <span
                      className="filter-form__checkbox__text"
                    >
                      {key}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div
              className="place-cards-wrapper"
            >
              {places.places.map(placeObj => (
                <PlaceCard
                  key={placeObj._id}
                  place={placeObj}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PlacesFilterForm;
