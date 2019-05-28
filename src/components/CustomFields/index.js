import React, {Fragment} from 'react';
import './styles.scss';

export const customInputField = ({
    input,
    type,
    meta: { touched, error }
  }) => (
    <Fragment>
        <input {...input} type={type} />
        {touched && error && <span className="input-error">{error}</span>}
    </Fragment>
  )