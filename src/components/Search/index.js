import {useEffect} from 'react'

import Router from 'next/router'
import { Field } from 'redux-form'
import { customInputField } from '../CustomFields';
import './search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {

  const {getCategoriesStart, categories, getCitiesStart, cities} = props

  const { handleSubmit } = props;
  const onSubmitHandle = (formValues) => {
    console.log(formValues)
    Router.push(`/placesCategory?location=${formValues.city}&keywords=${formValues.keywords}`)
  }

  useEffect(() => {
    getCategoriesStart();
    getCitiesStart()
  }, []);

  return (
    <section className="search-wrapper">
      <div className="container">
        <form className="search-form" onSubmit={handleSubmit(onSubmitHandle)}>
          <div className="search-form__places">
            <Field
            placeholder="keywords" 
            name="keywords"
            className="search-form__input"
            component={customInputField}
            autocomplete="off"
            list="keywords-categories"
            type="text">
              <datalist id="keywords-categories">
                {categories.map(category =>(
                  <option key={category.id} value={category.name}></option>
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
            placeholder="location" 
            name="city"
            className="search-form__input"
            autocomplete="off"
            component={customInputField}
            type="text">
            </Field>
            {<FontAwesomeIcon
            className='search-form__icon-map'
            icon={faMapMarkerAlt}
          />}
          </div>
          <button className="search-form__button">search now</button>
        </form>
      </div>
    </section>
  )
}

export default Search;