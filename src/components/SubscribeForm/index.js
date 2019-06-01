import React, { useEffect } from 'react';
import { Field } from 'redux-form'
import { customInputField } from '../CustomFields';

const SubscribeForm = (props) => {
  const { createSubscribesStart, handleSubmit } = props;
  // useEffect(() => {
  //   createSubscribesStart();
  // }, []);
  const onSubmitHandle = (formValues) => {
    console.log(formValues)
    createSubscribesStart(formValues)
  }
  return (
    <form className='subscribe-form' onSubmit={handleSubmit(onSubmitHandle)}>
        <Field
          name="name"
          component={customInputField}
          type="text"
          placeholder="Your Name"
          className='subscribe-form__input subscribe-form__input_name'
        />
        <Field
          name="email"
          component={customInputField}
          type="text"
          placeholder='Your Email'
          className='subscribe-form__input subscribe-form__input_email'
        />
      <button className='subscribe-form__button'>
        Subscribe Now
    </button>
    </form>
  )
}

export default SubscribeForm;