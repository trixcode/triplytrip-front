import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import './search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import customInputField from '../CustomFields';

const Search = (props) => {
  const {
    getCategoriesStart, categories, getCitiesStart, history, handleSubmit,
  } = props;

  const onSubmitHandle = (formValues) => {
    const emptyKeywords = formValues.keywords === undefined ? '' : formValues.keywords;
    const emptyCity = formValues.city === undefined ? '' : formValues.city;
    history.push(`/placesCategory?location=${emptyCity}&keywords=${emptyKeywords}`);
  };

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
              type="text"
            >
              <datalist id="keywords-categories">
                {categories.map(category => (
                  <option key={category._id} value={category.name} />
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
              type="text"
            />
            {<FontAwesomeIcon
              className="search-form__icon-map"
              icon={faMapMarkerAlt}
            />}
          </div>
          <button type="submit" className="search-form__button">Поиск</button>
        </form>
      </div>
    </section>
  );
};

Search.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  getCategoriesStart: PropTypes.func.isRequired,
  getCitiesStart: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};


export default Search;
