import React, {Fragment} from 'react';
import './styles.scss';

export const customInputField = ({
    input,
    type,
    className,
    placeholder,
    meta: { touched, error }
  }) => (
    <Fragment>
        <input {...input} type={type} className={className} placeholder={placeholder} />
        {touched && error && <span className="input-error">{error}</span>}
    </Fragment>
  )