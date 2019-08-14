import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import customInputField from '../CustomFields';

const SubscribeArticles = (props) => {
  const { createSubscribesStart, handleSubmit } = props;
  const onSubmitHandle = (formValues) => {
    createSubscribesStart(formValues);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandle)}>
      <span className="article-sidebar-newsletter__text">
        Подпишитесь на нас и вы никогда не пропустите наши новые статьи
      </span>
      <div className="article-sidebar-newsletter__input">
        <Field
          name="email"
          component={customInputField}
          type="text"
          placeholder="Your Email"
          className="article-sidebar-newsletter__input--email"
        />
        <button type="submit" className="article-sidebar-newsletter__input--button">
          <FontAwesomeIcon className="telegram-icon" icon={faTelegramPlane} />
        </button>
      </div>
    </form>
  );
};

SubscribeArticles.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  createSubscribesStart: PropTypes.func.isRequired,
};

export default SubscribeArticles;
