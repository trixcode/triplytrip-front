import React from 'react';
import { Field } from 'redux-form';
import customInputField from '../CustomFields';

const PlaceDetailContactForm = (props) => {
  const { handleSubmit } = props;
  const onSubmitHandle = () => {
  };
  return (
    <form className="sidebars-form-wrapper" onSubmit={handleSubmit(onSubmitHandle)}>
      <div className="sidebar-contact-me-input-block">
        <span>Ваше имя</span>
        <Field
          name="name"
          component={customInputField}
          type="text"
        />
      </div>
      <div className="sidebar-contact-me-input-block">
        <span>Ваш Email</span>
        <Field
          name="email"
          component={customInputField}
          type="text"
        />
      </div>
      <div className="sidebar-contact-me-input-block">
        <span>Tема</span>
        <Field
          name="subject"
          component={customInputField}
          type="text"
        />
      </div>
      <div className="sidebar-contact-me-input-block">
        <span>Ваше сообщение </span>
        <Field
          name="message"
          component={customInputField}
          type="text"
        />
      </div>
      <button type="submit" className="sidebars-button">Отправить</button>
    </form>
  );
};

export default PlaceDetailContactForm;
