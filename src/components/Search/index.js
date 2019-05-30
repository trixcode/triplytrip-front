import {useEffect} from 'react'

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
    sessionStorage.setItem('category', formValues.category)
    sessionStorage.setItem('city', formValues.city)
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
            placeholder="Выберите категорию" 
            name="category"
            component="select"
            type="text">
              <option/>
              {categories.map(category => (
                <option key={category.id}>{category.name}</option>
              ))}
            </Field>

            {<FontAwesomeIcon
              className="search-form__icon-search"
              icon={faSearch}
            />}
          </div>
          <div className="search-form__location">
          <Field
            placeholder="город" 
            name="city"
            component="select"
            type="text">
              <option/>
              {cities.map(city => (
                <option key={city.id}>{city.name}</option>
              ))}
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