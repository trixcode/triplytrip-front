import React from 'react';
import { Field } from 'redux-form'
import { customInputField } from '../CustomFields';

const SubscribeForm = (props) => {
  const { handleSubmit } = props;
  const onSubmitHandle = (formValues) => {
    console.log(formValues)
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
          name="emial"
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