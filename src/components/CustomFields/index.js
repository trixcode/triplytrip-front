import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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

customInputField.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};


export default customInputField;
