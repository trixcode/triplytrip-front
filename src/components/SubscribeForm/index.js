import React from 'react';
import { Field } from 'redux-form';
import customInputField from '../CustomFields';

const SubscribeForm = (props) => {
  const { createSubscribesStart, handleSubmit } = props;
  const onSubmitHandle = (formValues) => {
    createSubscribesStart(formValues);
  };
  return (
    <>
      <form className="subscribe-form" onSubmit={handleSubmit(onSubmitHandle)}>
        <Field
          name="name"
          component={customInputField}
          type="text"
          placeholder="Ваше имя"
          className="subscribe-form__input subscribe-form__input_name"
        />
        <Field
          name="email"
          component={customInputField}
          type="text"
          placeholder="Электронная почта"
          className="subscribe-form__input subscribe-form__input_email"
        />
        <button type="submit" className="subscribe-form__button">
        Подписаться
        </button>
      </form>
    </>
  );
};

export default SubscribeForm;
