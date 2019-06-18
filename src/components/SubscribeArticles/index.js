import React, { useEffect } from 'react';
import { Field } from 'redux-form'
import { customInputField } from '../CustomFields';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const SubscribeArticles = (props) => {
  const { createSubscribesStart, handleSubmit } = props;
  const onSubmitHandle = (formValues) => {
    console.log(formValues)
    createSubscribesStart(formValues)
  }
  return (
    <form onSubmit={handleSubmit(onSubmitHandle)}>
      <span className='article-sidebar-newsletter__text'>
        Subscribe us and never miss our new articles
      </span>
      <div className='article-sidebar-newsletter__input'>
        <Field
          name="email"
          component={customInputField}
          type="text"
          placeholder='Your Email'
          className='article-sidebar-newsletter__input--email'
        />
        <button className='article-sidebar-newsletter__input--button'>
        <FontAwesomeIcon className='telegram-icon' icon={faTelegramPlane} />
        </button>
      </div>
    </form>
  )
}

export default SubscribeArticles;