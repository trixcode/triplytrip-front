import {useEffect} from 'react'
import React from 'react'
import { Field } from 'redux-form'
import { customInputField } from '../CustomFields';
import './search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {

  const {getCategoriesStart, categories, getCitiesStart, history} = props

  const { handleSubmit } = props;
  const onSubmitHandle = (formValues) => {
    const emptyKeywords = formValues.keywords === undefined ? '' : formValues.keywords
    const emptyCity = formValues.city === undefined ? '' : formValues.city
    history.push(`/placesCategory?location=${emptyCity}&keywords=${emptyKeywords}`)
  }

  useEffect(() => {
    getCategoriesStart();
    getCitiesStart();
  }, [getCategoriesStart, getCitiesStart]);

  return (
    <section className="search-wrapper">
      <div className="container">
        <form className="search-form" onSubmit={handleSubmit(onSubmitHandle)}>
          <div className="search-form__places">
            <Field
            placeholder="Ключевое слово" 
            name="keywords"
            className="search-form__input"
            component={customInputField}
            autoComplete="off"
            list="keywords-categories"
            type="text">
              <datalist id="keywords-categories">
                {categories.map(category =>(
                  <option key={category._id} value={category.name}></option>
                ))}
              </datalist>
            </Field>

            {<FontAwesomeIcon
              className="search-form__icon-search"
              icon={faSearch}
            />}
          </div>
          <div className="search-form__location">
          <Field
            placeholder="Местоположение" 
            name="city"
            className="search-form__input"
            autoComplete="off"
            component={customInputField}
            type="text">
            </Field>
            {<FontAwesomeIcon
            className='search-form__icon-map'
            icon={faMapMarkerAlt}
          />}
          </div>
          <button className="search-form__button">Поиск</button>
        </form>
      </div>
    </section>
  )
}

export default Search;