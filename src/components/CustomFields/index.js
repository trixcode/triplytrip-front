import React, { Fragment } from 'react';
import './styles.scss';

const customInputField = ({
  input,
  type,
  className,
  placeholder,
  autoComplete,
  list,
  meta: { touched, error },
}) => (
  <Fragment>
    <input
      {...input}
      type={type}
      className={className}
      placeholder={placeholder}
      autoComplete={autoComplete}
      list={list}
    />
    {touched && error && <span className="input-error">{error}</span>}
  </Fragment>
);

export default customInputField;
