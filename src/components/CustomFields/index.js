import React, {Fragment} from 'react';
import './styles.scss';

export const customInputField = ({
    input,
    type,
    className,
    placeholder,
    autocomplete,
    list,
    meta: { touched, error }
  }) => (
    <Fragment>
        <input {...input} type={type} className={className} placeholder={placeholder} 
        autocomplete={autocomplete} list={list}/>
        {touched && error && <span className="input-error">{error}</span>}
    </Fragment>
  )