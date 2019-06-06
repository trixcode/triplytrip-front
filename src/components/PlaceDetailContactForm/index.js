import React from 'react';
import { Field } from 'redux-form'
import { customInputField } from '../CustomFields';

const PlaceDetailContactForm = (props) => {
  const { handleSubmit } = props;
  const onSubmitHandle = (formValues) => {
    console.log(formValues)
  } 
  return (
    <form className="sidebars-form-wrapper" onSubmit={handleSubmit(onSubmitHandle)}>
      <div className="sidebar-contact-me-input-block">
        <span>Your Name</span>
        <Field
          name="name"
          component={customInputField}
          type="text"
        />
      </div>
      <div className="sidebar-contact-me-input-block">
        <span>Your Email</span>
        <Field
          name="email"
          component={customInputField}
          type="text"
        />
      </div>
      <div className="sidebar-contact-me-input-block">
        <span>Subject</span>
        <Field
          name="subject"
          component={customInputField}
          type="text"
        />
      </div>
      <div className="sidebar-contact-me-input-block">
        <span>Your Message</span>
        <Field
          name="message"
          component={customInputField}
          type="text"
        />
      </div>
      <button type="submit" className="sidebars-button">Submit</button>
    </form>
  )
}

export default PlaceDetailContactForm;